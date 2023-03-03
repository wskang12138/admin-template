import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { flatRoutes } from '@/utils/func'
import Menu from '@/routes/menu'

const MenuData = flatRoutes(Menu)

function CustomBreadcrumb() {
  const { pathname } = useLocation()

  const renderBreadcrumbs = () => {
    const array = pathname.split('/').filter(Boolean)
    return array.map((item: any) => {
      return MenuData.map((item_: any, index: number) => {
        if (item_.key === item) {
          return (
            <Breadcrumb.Item key={item_.key} >{item_.label}</Breadcrumb.Item>
          )
        }
      })
    })
  }

  return <Breadcrumb separator=">">{renderBreadcrumbs()}</Breadcrumb>
}
export default CustomBreadcrumb
