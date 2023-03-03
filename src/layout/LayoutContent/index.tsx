import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
const { Content } = Layout

const LayoutContent = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  )
}
export default LayoutContent
