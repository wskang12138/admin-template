import dayjs from 'dayjs'

//  深拷贝
export const deepClone = (data: any) => {
  const newData: any = Array.isArray(data) ? [] : {}
  for (const key in data) {
    if (data[key] && data[key] === 'object') {
      newData[key] = deepClone(data[key])
    } else {
      newData[key] = data[key]
    }
  }
  return newData
}

// 获取扁菜单
export const flatRoutes = (routes: any, array: any = []) => {
  routes.forEach((item: any) => {
    array.push({
      key: item.key.split('/').filter(Boolean).join(),
      label: item.label
    })
    if (item.children) {
      flatRoutes(item.children, array)
    }
  })
  return [...array]
}
//获取扁平的路由
export const flatR = (routes: any, array: any = []) => {
  routes.forEach((item: any) => {
    array.push({
      path: item.path,
      title: item.title
    })
    if (item.children) {
      flatR(item.children, array)
    }
  })
  return [...array]
}

// 表单时间格式化
export const formatDateTime = (formValues: any, searchData: any) => {
  const result: any = {}
  searchData.map((item: any) => {
    // 如果是日期选择器,并且里面有值的时候
    if (item.valueType === 'datePicker' && formValues[item.dataIndex]) {
      switch (item.picker) {
        case 'year':
          result[item.dataIndex] = dayjs(formValues[item.dataIndex]).format(
            'YYYY'
          )
          break
        case 'month':
          result[item.dataIndex] = dayjs(formValues[item.dataIndex]).format(
            'YYYY-MM'
          )
          break
        default:
          result[item.dataIndex] = dayjs(formValues[item.dataIndex]).format(
            'YYYY-MM-DD HH:mm:ss'
          )
          break
      }
      return
    }
    // 如果是时间范围选择器,并且里面有值的时候
    if (item.valueType === 'dateRange' && formValues[item.dataIndex]) {
      result[item.dataIndex] = formValues[item.dataIndex].map(
        (time: any, index: number) => {
          if (item.showTime) {
            return index === 0
              ? dayjs(time).format('YYYY-MM-DD 00:00:00')
              : dayjs(time).format('YYYY-MM-DD 23:59:59')
          } else {
            return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
          }
        }
      )
      return
    }
    result[item.dataIndex] = formValues[item.dataIndex]
  })
  return result
}
