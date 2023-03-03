import { message } from 'antd'

const copy = (ref: any) => {
  const textarea = document.createElement('textarea')
  textarea.setAttribute('readonly', 'readonly')
  textarea.value = ref.innerText
  document.body.appendChild(textarea)
  textarea.select()
  const copyStatus = document.execCommand('copy')
  // 对成功与否定进行提示
  if (copyStatus) {
    message.success('复制成功')
  } else {
    message.error('复制失败')
  }
  document.body.removeChild(textarea)
}

export default copy
