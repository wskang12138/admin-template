// import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './styles/index.less'
import { ConfigProvider } from 'antd' // 国际化全局组件
import zhCN from 'antd/es/locale/zh_CN'
import ErrorFallback from '@/layout/ErrorFallback'
import ErroyBoundary from '@/components/ErrorBoundary'
import store, { persistor } from './store/index'
import { PersistGate } from 'redux-persist/integration/react'

ConfigProvider.config({
  theme: {
    primaryColor: '#2F6FFF'
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> // 严格模式会让 useEffect 执行两次，所以屏蔽
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={zhCN}>
        <ErroyBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErroyBoundary>
      </ConfigProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
)
