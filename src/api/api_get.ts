import request from '@/utils/request'
export function apiGet(interfaceName: string, params?: object) {
  return request({
    url: interfaceName,
    method: 'get',
    params
  })
}
