import { MenuItem } from '@/utils/interface'
import ImgIcon from '@/components/ImgIcon'
import dot from '@/assets/images/menuIcon/dot.svg'
import company from '@/assets/images/menuIcon/company.svg'
import bill from '@/assets/images/menuIcon/bill.svg'
import {
  ClockCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'

const Menu: MenuItem[] = [
  {
    label: '首页',
    key: '/home',
    icon: <ImgIcon icon={company} />
  },
  {
    key: '/chart',
    label: '图表',
    icon: <ImgIcon icon={bill} />,
    children: [
      {
        key: '/water',
        label: '水型图',
        icon: <ImgIcon icon={dot} />
      },
      {
        key: '/columan',
        label: '柱形图',
        icon: <ImgIcon icon={dot} />
      }
    ]
  },
  {
    key: '/exception',
    label: '异常页',
    icon: <ClockCircleOutlined />,
    children: [
      {
        key: '/a',
        label: '403',
        icon: <InfoCircleOutlined />
      },
      {
        key: '/b',
        label: 'other',
        icon: <ExclamationCircleOutlined />,
        children: [
          {
            key: '/404',
            label: '404页',
            icon: <InfoCircleOutlined />
          },
          {
            key: '/500',
            label: '500页',
            icon: <InfoCircleOutlined />
          }
        ]
      }
    ]
  }
]
export default Menu
