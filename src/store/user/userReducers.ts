const initState = {
  userInfo: {}
}
export default (state = initState, action: any) => {
  switch (action.type) {
    case 'userInfoSETFC':
      return {
        ...state,
        userInfo: {
          ...action.payload
        }
      }
    // 默认
    default:
      return state
  }
}
