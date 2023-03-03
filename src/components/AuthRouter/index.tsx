/**
 * @description 路由守卫组件
 * */
import { Navigate, useLocation } from 'react-router-dom'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { flatR } from '@/utils/func'
import routes from '@/routes'
const routesData = flatR(routes)

const AuthRouter = ({ children }: any) => {
  NProgress.start()
  const { pathname } = useLocation()
  // 如果去login，放行

  if (localStorage.getItem('token') && pathname === '/login') {
    return <Navigate to="/home" replace />
  }
  if (pathname === '/login') {
    NProgress.done()
    return children
  }

  // * 判断是否有Token,如果没token.跳到登陆页
  if (!localStorage.getItem('token')) return <Navigate to="/login" replace />
  const temp = routesData.filter(
    (item: { path: string }) => item.path === pathname
  )
  let title = '后台管理系统'
  if (temp[0]?.title) {
    title += '-' + temp[0].title
  }
  document.title = title
  NProgress.done()
  return children
}

export default AuthRouter
