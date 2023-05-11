import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { flatRoutes } from '@/utils/func'
import Menu from '@/routes/menu'

const MenuData = flatRoutes(Menu)

function CustomBreadcrumb() {
  const { pathname } = useLocation()
  const [items, setItems] = useState<Array<any>>([])

  useEffect(() => {
    const array = pathname.split('/').filter(Boolean)
    let arr: any = []
    array.map((item: any) => {
      MenuData.map((item_: any) => {
        if (item_.key === item) {
          arr.push({ title: item_.label })
        }
      })
    })
    setItems(arr)
  }, [pathname])

  return <Breadcrumb separator=">" items={items}></Breadcrumb>
}
export default CustomBreadcrumb
