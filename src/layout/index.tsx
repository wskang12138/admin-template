import { Layout } from 'antd'
import './index.less'
import LayoutSider from './LayoutSider'
import LayoutContent from './LayoutContent'
import Header from './LayoutHeader'
import CustomBreadcrumb from './BreadCrumb'
import { memo, useState } from 'react'
import classNames from 'classnames'
const Layouts = () => {
  const [isCollapse, setIsCollapse] = useState<Boolean>(false) // 进行一个切换的控制。
  return (
    <Layout className="layout">
      <Header className="header" />
      <Layout className="bottom">
        <LayoutSider isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        <Layout.Content
          className={classNames(
            'rightContent',
            isCollapse ? 'iscollright' : ''
          )}
        >
          <div className="breadcrumb">
            <CustomBreadcrumb />
          </div>
          <div className="container">
            <LayoutContent />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default memo(Layouts)
