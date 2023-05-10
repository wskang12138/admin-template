import { Layout } from 'antd'
const { Header } = Layout

import Logo from './components/Logo'
import AvatarIcon from './components/AvatarIcon'
// import Language from './components/Language'
import Fullscreen from './components/Fullscreen'
import Theme from './components/SwitchDark'

import './index.less'

const LayoutHeader = (props: { className?: string }) => {
  return (
    <Header {...props}>
      <div className="header-lf">
        <Logo />
      </div>
      <div className="header-ri">
        {/* <Language /> */}
        <Theme />
        <Fullscreen />
        <AvatarIcon />
      </div>
    </Header>
  )
}

export default LayoutHeader
