import { useRef } from 'react'
import { Avatar, Modal, Dropdown, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import PasswordModal from './PasswordModal'
import InfoModal from './InfoModal'
import type { MenuProps } from 'antd'
import { userInfoSETFC } from '@/store/user/userFuncs'
import { useDispatch } from 'react-redux'
import cookie from 'react-cookies'
import head from '@/assets/images/home/head.jpg'

const AvatarIcon = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // 获取数据
  // const { userInfo } = useSelector((state: any) => state.userReducers)

  interface ModalProps {
    showModal: (params: { name: number }) => void
  }
  const passRef = useRef<ModalProps>(null)
  const infoRef = useRef<ModalProps>(null)

  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        localStorage.removeItem('token')
        dispatch(userInfoSETFC({}))
        cookie.remove('wrap')
        message.success('退出登录成功！')
        window.location.reload() // 退出得时候刷新，避免主题变化影响到登录页面。
        // navigate('/login')
      }
    })
  }

  // Dropdown Menu
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span className="dropdown-item">首页</span>,
      onClick: () => navigate('/login')
    },
    {
      key: '2',
      label: <span className="dropdown-item">个人信息</span>,
      onClick: () => infoRef.current!.showModal({ name: 11 })
    },
    {
      key: '3',
      label: <span className="dropdown-item">修改密码</span>,
      onClick: () => passRef.current!.showModal({ name: 11 })
    },
    {
      type: 'divider'
    },
    {
      key: '4',
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout
    }
  ]

  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" arrow trigger={['click']}>
        <Avatar size="large" src={head} />
      </Dropdown>
      <InfoModal innerRef={infoRef}></InfoModal>
      <PasswordModal innerRef={passRef}></PasswordModal>
    </>
  )
}

export default AvatarIcon
