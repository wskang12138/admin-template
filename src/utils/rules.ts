//账号的校验
export const ValidateuserId = () => [
  { required: true, message: `请输入账号` },
  { pattern: /^[a-zA-Z0-9]{6,20}$/, message: '账号只能是6-20位数字或字母' }
]
//账号名的校验
export const ValidateuserName = () => [
  { required: true, message: `请输入账号名` },
  { pattern: /^.{1,20}$/, message: '账号名必填，且只能是1-20个非空格字符' }
]
//密码的校验
export const ValidateuserPsw = () => [
  { required: true, message: `请输入密码` },
  { pattern: /^\S{6,20}$/, message: '密码必填，且只能是6-20位非空格字符' }
]
export const ValidatePsw = () => [
  { pattern: /^\S{6,20}$/, message: '密码必填，且只能是6-20位非空格字符' }
]

//确认密码的校验
export const ValidateuserConfirmPsw = () => [
  {
    required: true,
    message: '请再次输入密码'
  },
  { pattern: /^\S{6,20}$/, message: '密码必填，且只能是6-20位非空格字符' },
  ({ getFieldValue }: any) => ({
    validator(_: any, value: any) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve()
      }
      return Promise.reject(new Error('两次输入的密码不一致'))
    }
  })
]
//手机电话的校验
export const validatePhone = () => [
  { required: true, message: `请输入手机号` },
  { pattern: /^1[3456789]\d{9}$/, message: `请填写正确的手机号码格式` }
]
//银行卡号的的校验
export const validateBank = () => [
  { required: true, message: `请输入银行卡号` },
  {
    pattern: /^([1-9]{1})(\d{15}|\d{18})$/,
    message: `请填写正确的银行卡号格式`
  }
]
//必填项
export const Validate = (text: string) => [
  { required: true, message: `请输入${text}` }
]
//只能输入数字
export const ValidateNumber = () => [
  { required: true, message: `请输入` },
  {
    pattern:
      /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
    message: `只能输入数字`
  }
]
