import React, { Component, isValidElement } from 'react'

const initialState = {
  error: null
}

const changedArray = (a = [], b = []) => {
  return (
    a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]))
  )
}

export interface ErrorBoundaryProps {
  children: React.ReactNode
  resetKeys?: any
  onResetKeysChange?: (prevKeys: any, key: any) => void
  onError?: (error: Error, errorInfo: any) => void
  onReset?: () => void
  fallback?: () => void
  FallbackComponent?: any
  fallbackRender?: any
}

export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error | undefined | null
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  updatedWithError: boolean
  public constructor(props: ErrorBoundaryProps) {
    super(props)
    this.updatedWithError = false
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // 你同样可以将错误日志上报给服务器
    if (this.props.onError) {
      this.props.onError(error, errorInfo.componentStack)
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { error } = this.state
    const { resetKeys, onResetKeysChange } = this.props
    // 已经存在错误，并且是第一次由于 error 而引发的 render/update，那么设置 flag=true，不会重置
    if (error !== null && !this.updatedWithError) {
      this.updatedWithError = true
      return
    }
    // 已经存在错误，并且是普通的组件 render，则检查 resetKeys 是否有改动，改了就重置
    if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      if (onResetKeysChange) {
        onResetKeysChange(prevProps.resetKeys, resetKeys)
      }
      this.reset()
    }
  }

  reset = () => {
    this.updatedWithError = false
    this.setState(initialState)
  }

  resetErrorBoundary = () => {
    // 允许用户点一下 fallback 里的一个按钮来重新加载出错组件，不需要重刷页面
    if (this.props.onReset) {
      this.props.onReset()
    }
    this.reset()
  }

  render() {
    const { fallback, FallbackComponent, fallbackRender } = this.props
    const { error } = this.state
    // 多种 fallback 的判断
    if (error !== null) {
      const fallbackProps = {
        error,
        // 将 resetErrorBoundary 传入 fallback
        resetErrorBoundary: this.resetErrorBoundary
      }
      // 判断 fallback 是否为合法的 Element
      if (isValidElement(fallback)) {
        return fallback
      }
      // 判断 render 是否为函数
      if (typeof fallbackRender === 'function') {
        return fallbackRender(fallbackProps)
      }
      // 判断是否存在 FallbackComponent
      if (FallbackComponent) {
        return <FallbackComponent {...fallbackProps} />
      }

      throw new Error(
        'ErrorBoundary 组件需要传入 fallback, fallbackRender, FallbackComponent 其中一个'
      )
    }
    return this.props.children
  }
}
