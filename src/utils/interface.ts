//自定义路由
export interface IMetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

export interface IRouteObject {
  caseSensitive?: boolean
  children?: IRouteObject[]
  element?: React.ReactNode
  title?: string
  index?: boolean
  path?: string
  meta?: IMetaProps
  isLink?: string
}

//自定义菜单

export interface MenuItem {
  label: string
  key: string
  icon?: React.ReactNode
  children?: MenuItem[]
  type?: 'group'
}
