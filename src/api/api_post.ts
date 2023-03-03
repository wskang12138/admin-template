import request from '@/utils/request'
import { AxiosRequestConfig } from 'axios'

export function apiPost(
  interfaceName: string,
  data: any,
  config?: AxiosRequestConfig<any>
) {
  return request({
    url: interfaceName,
    method: 'post',
    data,
    ...config
  })
}
