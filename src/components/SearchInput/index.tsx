import React from 'react'
import { Input, InputProps } from 'antd'
import searchIcon from '@/assets/images/MeetingRecord/search.png'

interface SearchInputProps extends InputProps {
  onSearch: () => void
}

// 表格过滤搜索框
export default function SearchInput(props: SearchInputProps) {
  const { value, onSearch, ...resetProps } = props

  return (
    <Input
      {...resetProps}
      prefix={<img src={searchIcon} onMouseDownCapture={onSearch} />}
      onPressEnter={onSearch}
    />
  )
}
