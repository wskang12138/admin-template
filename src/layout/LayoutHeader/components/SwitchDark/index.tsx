import { Switch } from 'antd'
import { useState } from 'react'

const SwitchDark = () => {
  const [themeConfig, setThemeConfig] = useState<boolean>(false)
  const onChange = (checked: boolean) => {
    const body = document.documentElement as HTMLElement
    if(checked){
      body.setAttribute('style', 'filter:invert(80%)')
    }else{
      body.removeAttribute('style')
    }
    setThemeConfig(checked)
  }

  return (
    <Switch
      className="dark"
      defaultChecked={themeConfig}
      checkedChildren={<>🌞</>}
      unCheckedChildren={<>🌜</>}
      onChange={onChange}
    />
  )
}

export default SwitchDark
