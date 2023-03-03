import { InputProps, SelectProps, AvatarProps } from 'antd'
import { TextAreaProps } from 'antd/lib/input/TextArea'

interface BaseColumn {
  name: string
  label: string
  required?: string
}

export interface InputColumn
  extends BaseColumn,
    Omit<InputProps, 'name' | 'required'> {
  type: 'input'
}

export interface SelectColumn extends BaseColumn, SelectProps {
  type: 'select'
}

export interface PasswordColumn extends BaseColumn {
  type: 'password'
  visibilityToggle: boolean | { visible: boolean; onVisibleChange: boolean }
}

export interface TextareaColumn
  extends BaseColumn,
    Omit<TextAreaProps, 'name' | 'required'> {
  type: 'textarea'
}

export interface UploadColumn extends BaseColumn {
  type: 'upload'
  action: string
  accept?: string
  desc?: string
  shape?: 'circle' | 'square'
}

export interface RecombinerColumn extends BaseColumn {
  type: 'recombiner'
}

export type Columns =
  | InputColumn
  | SelectColumn
  | PasswordColumn
  | TextareaColumn
  | UploadColumn
  | RecombinerColumn
