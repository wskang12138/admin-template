import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import cookie from 'react-cookies'
import CollapseIcon from './CollapseIcon'
import MenuData from '@/routes/menu'
import './index.less'
const { Sider } = Layout

const LayoutSider = props => {
  const { isCollapse, setIsCollapse } = props
  const [items, setItems] = useState<any>([])
  const [selectedKeys, setSelectedKeys] = useState<any>([])
  const navigate = useNavigate()
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const { pathname } = useLocation()

  useEffect(() => {
    const renderSiderMenu = async () => {
      setItems(MenuData)
    }
    // 渲染侧边栏菜单
    renderSiderMenu()
  }, [])
  // 默认不展开
  useEffect(() => {
    let temp: any = cookie.load('wrap') // 进行一个刷新保存的菜单路由的读取
    if (temp) {
      temp = temp.split('-').filter(Boolean)
      setOpenKeys(temp)
    }
    if (isCollapse) {
      setOpenKeys([])
    }
  }, [isCollapse])
  // 路由跳转的时候进行复制
  useEffect(() => {
    const setActiveMenu = async () => {
      const locatinArray: any = pathname
        .split('/')
        .filter(Boolean)
        .map((item: any) => `/${item}`)
      setSelectedKeys(locatinArray)
    }
    setActiveMenu()
  }, [pathname])

  const handlerOpen = (openKeys: string[]) => {
    setOpenKeys(openKeys)
    cookie.save('wrap', openKeys.filter(Boolean).join('-'))
  }
  const onClick = (values: any) => {
    const path = values.keyPath.reverse().join('')
    if (path !== pathname) {
      // 如果是当前的路由不进行操作防止资源的一种浪费。
      navigate(path)
    }
  }
  // 之所以加key,解决刷新的时候颜色选择中的菜单不高亮的问题，让它进行一个重新的渲染。
  return (
    <Sider
      trigger={null}
      className="slider"
      key={`${pathname}+${Math.random()}`}
      collapsed={isCollapse as boolean}
    >
      <Menu
        theme="light"
        onOpenChange={(openKeys: string[]) => handlerOpen(openKeys)}
        mode="inline"
        defaultSelectedKeys={['/home']}
        triggerSubMenuAction="click"
        defaultOpenKeys={openKeys}
        onClick={onClick}
        items={items}
        selectedKeys={selectedKeys}
      />
      <CollapseIcon isCollapse={isCollapse} updateCollapse={setIsCollapse} />
    </Sider>
  )
}
export default LayoutSider
