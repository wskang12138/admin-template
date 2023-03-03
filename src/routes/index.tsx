import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
import lazyLoad from './LazyLoad'
import { IRouteObject } from '@/utils/interface'

const Layout = lazy(() => import('@/layout'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Home = lazy(() => import('@/pages/Home'))
const WatarChart = lazy(() => import('@/pages/Echarts/WaterChart'))
const ColumnChart = lazy(() => import('@/pages/Echarts/ColumnChart'))
const Exception403 = lazy(() => import('@/pages/Exception/403'))
const Exception404 = lazy(() => import('@/pages/Exception/404'))
const Exception500 = lazy(() => import('@/pages/Exception/500'))

const routes: IRouteObject[] = [
  {
    path: '/',
    element: lazyLoad(Layout),
    children: [
      // 公司管理
      {
        index: true,
        path: '/',
        element: <Navigate to="/home" />
      },
      {
        index: true,
        path: '/home',
        element: lazyLoad(Home),
        title: '主页'
      },
      // 图标展示
      {
        index: true,
        path: '/chart/water',
        element: lazyLoad(WatarChart),
        title: '水型图'
      },
      {
        index: true,
        path: '/chart/columan',
        element: lazyLoad(ColumnChart),
        title: '柱形图'
      },
      // 三级路由的测试
      {
        index: true,
        path: '/exception/a',
        element: lazyLoad(Exception403),
        title: '403'
      },
      {
        index: true,
        path: '/exception/b/404',
        element: lazyLoad(Exception404),
        title: '404'
      },
      {
        index: true,
        path: '/exception/b/500',
        element: lazyLoad(Exception500),
        title: '500'
      }
    ]
  },
  {
    path: '/login',
    element: lazyLoad(Login),
    title: '登录页面'
  },
  {
    path: '/404',
    element: lazyLoad(NotFound),
    title: '404'
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
    title: '404'
  }
]

export default routes
