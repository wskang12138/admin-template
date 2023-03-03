import { Layout } from 'antd'
import './index.less'
import LayoutSider from './LayoutSider'
import LayoutContent from './LayoutContent'
import Header from './LayoutHeader'
import CustomBreadcrumb from './BreadCrumb'
import { memo,useState } from 'react'
import classNames from 'classnames'
const Layouts = () => {
  
  const [isCollapse, setIsCollapse] = useState<Boolean>(false)//进行一个切换的控制。
  return (
    <Layout className="layout">
      <Layout className="header">
        <Header />
      </Layout>
      <div className="bottom">
        <Layout className={classNames('leftmenu',isCollapse?'iscollLeft':'')}>
          <LayoutSider isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        </Layout>
        <Layout className={classNames('rightContent',isCollapse?'iscollright':'')} >
          <Layout className="breadcrumb">
            <CustomBreadcrumb />
          </Layout>
          <Layout className="container">
            <LayoutContent />
          </Layout>
        </Layout>
      </div>
    </Layout>
  )
}

export default memo(Layouts)
