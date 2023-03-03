import React from 'react'
import './index.less'

// 通过滤镜将 icon 图片变色
export default function ImgIcon(props: any) {
  const { icon } = props

  return (
    <div className="anticon anticon-clock-circle ant-menu-item-icon icon-wp ">
      <img src={icon} className="icon" />
    </div>
  )
}
