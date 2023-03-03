import { baseURL } from '@/api/api_url'
import Mock from 'mockjs'

const mock = Mock.mock
// 设置响应时间，测试 loading 样式
Mock.setup({ timeout: '500-1500' })

// 查看月度账单
export const loginApi = mock(`${baseURL}/mock/getLogin`, 'post', () => ({
  code: 200,
  msg: '获取数据成功',
  data: Mock.mock({
    token: 'sjhofdjaohohoduhjh'
  })
}))
