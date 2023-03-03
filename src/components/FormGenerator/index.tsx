import {
  Select,
  Input,
  Form,
  FormProps,
  FormInstance,
  Upload,
  message,
  Checkbox
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import type { UploadChangeParam } from 'antd/es/upload'

import { Columns } from './type'
import { useCallback, useState } from 'react'
const Item = Form.Item

function switchStaticItem(config: any) {
  switch (config.type) {
    case 'input': {
      return <Input {...config} />
    }

    case 'select': {
      return <Select {...config} />
    }

    case 'password': {
      return <Input.Password {...config} />
    }

    case 'textarea': {
      return <Input.TextArea {...config} />
    }

    default:
      return null
  }
}

export interface IFormGenerator extends FormProps {
  form?: FormInstance<any>
  columns: Columns[]
}

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

// 表单生成器
const FormGenerator = (props: IFormGenerator) => {
  const { form, columns, ...restProps } = props
  const [selfForm] = Form.useForm()
  const [imageUrl, setImageUrl] = useState<string>()
  const [fc, setFC] = useState(false) // input 可编辑切换器

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'uploading') {
      // setLoading(true);
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        // setLoading(false);
        setImageUrl(url)
      })
    }
  }

  const generateItem = useCallback(
    (columns: Columns[]) => {
      return columns.map(col => {
        const { name, label, required, ...config } = col
        switch (config.type) {
          case 'upload': {
            return (
              <Item
                key={name}
                name={name}
                rules={
                  required ? [{ required: true, message: required }] : undefined
                }
                valuePropName="filelist"
              >
                <Upload
                  name="file"
                  listType="picture-card"
                  className={`form-uploader ${
                    config.shape ?? 'circle'
                  }-uploader`}
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  accept={config.accept}
                >
                  {imageUrl && <img src={imageUrl} />}
                  <span
                    className={`form-uploader-icon ${imageUrl ? 'hidden' : ''}`}
                  />
                  <span className="form-uploader-desc">{config.desc}</span>
                </Upload>
              </Item>
            )
          }

          case 'recombiner': {
            return (
              <Item
                label={
                  <div>
                    <Checkbox onChange={e => setFC(e.target.checked)} /> {label}
                  </div>
                }
                key={name}
                name={name}
                rules={
                  required ? [{ required: true, message: required }] : undefined
                }
                valuePropName="filelist"
              >
                <Input disabled={!fc} />
              </Item>
            )
          }

          default: {
            return (
              <Item
                key={name}
                label={label}
                name={name}
                rules={
                  required ? [{ required: true, message: required }] : undefined
                }
              >
                {switchStaticItem(config)}
              </Item>
            )
          }
        }
      })
    },
    [columns, imageUrl, fc]
  )

  return (
    <Form
      {...restProps}
      name="basic"
      labelAlign="left"
      labelCol={{ span: 5 }}
      form={form ?? selfForm}
      autoComplete="off"
    >
      {generateItem(columns)}
    </Form>
  )
}

export default FormGenerator
