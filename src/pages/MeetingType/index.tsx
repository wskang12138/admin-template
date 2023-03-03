import {
  Form,
  Input,
  Popconfirm,
  Table,
  Typography,
  Tag,
  Space,
  Modal,
  message,
  Spin
} from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import './index.less'
import { Validate } from '@/utils/rules'
import { apiGet } from '@/api/api_get'
import { useSelector } from 'react-redux'
import { apiPost } from '@/api/api_post'

interface Item {
  key: string
  channelType: string
  color: string
  description: string
  id: string
}

const mapList = (data: any) => {
  const arr = (data ?? []).map((o: any, index: number) => ({
    key: index,
    id: o.id,
    description: o.description,
    color: o.color,
    channelType: o.channelType
  }))
  return arr
}

function MeetingType() {
  const [form] = Form.useForm()
  const [MadalForm] = Form.useForm()
  const [data, setData] = useState<Item[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [color, setColor] = useState<string>('#0000FF')
  const { userInfo } = useSelector((state: any) => state.userReducers)
  const [title, setTitle] = useState<string>('新增会议类型')
  const [updateId, setUpdateId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [saveLoading, setSaveLoding] = useState<boolean>(false)

  useEffect(() => {
    orgrinData()
  }, [])

  const orgrinData = useCallback(() => {
    setLoading(true)
    apiGet('ChannelType/queryType', { compid: userInfo.compId })
      .then((res: any) => {
        console.log(res)

        if (res.code === 200) {
          setData(mapList(res.data.filter(item => item.enable == 1)))
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    setTitle('编辑会议类型')
    setColor(record.color as string)
    setUpdateId(record.id as string)
    MadalForm.setFieldsValue({ ...record })
    setIsModalOpen(true)
  }

  const confirm = (record: Partial<Item> & { key: React.Key }) => {
    apiGet('ChannelType/deleteType', { id: record.id }).then((res: any) => {
      if (res.code === 200) {
        const newData = [...data]
        const index = newData.findIndex(item => record.id === item.id)
        newData.splice(index, 1)
        setData(newData)
        message.success('删除成功')
      } else {
        message.error('删除失败')
      }
    })
  }

  const columns = [
    {
      title: '会议类型',
      dataIndex: 'channelType',
      width: '10%',
      editable: true,
      render: (culon: any, row: any) => (
        <span>
          <Tag color={row.color + 22} key={culon}>
            <span style={{ color: `${row.color}` }}> {culon}</span>
          </Tag>
        </span>
      )
    },
    {
      title: '标签颜色',
      dataIndex: 'color',
      width: '40%',
      editable: true,
      render: (culon: any, row: any) => (
        <Tag color={row.color} key={culon} className="dot">
          <div className="dot" style={{ color: `${row.color}` }}></div>
        </Tag>
      )
    },
    {
      title: '类型描述',
      dataIndex: 'description',
      width: '40%',
      editable: true
    },
    {
      title: '操作',
      with: '10%',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        return (
          <span>
            <Typography.Link
              onClick={() => edit(record)}
              style={{ marginRight: 8 }}
            >
              修改
            </Typography.Link>
            <Popconfirm
              title="确定删除？"
              onConfirm={() => confirm(record)}
              style={{ marginRight: 8 }}
            >
              <a style={{ color: 'red' }}>删除</a>
            </Popconfirm>
          </span>
        )
      }
    }
  ]

  const handleOk = () => {
    MadalForm.validateFields().then(values => {
      setSaveLoding(true)
      const obj = {
        ...values,
        color: color,
        compId: userInfo.compId
      }
      if (title === '新增会议类型') {
        apiPost('ChannelType/newType', { ...obj })
          .then((res: any) => {
            setSaveLoding(false)
            if (res.code === 200) {
              message.success('新增成功')
              orgrinData()
              setIsModalOpen(false)
            } else {
              message.error(res.data)
            }
          })
          .catch(() => {
            setSaveLoding(false)
          })
      } else {
        obj.id = updateId
        apiPost('ChannelType/updateType', { ...obj })
          .then((res: any) => {
            setSaveLoding(false)
            if (res.code === 200) {
              message.success('修改成功')
              orgrinData()
              setIsModalOpen(false)
            } else {
              message.error(res.data)
            }
          })
          .catch(() => {
            setSaveLoding(false)
          })
      }
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleAdd = () => {
    setTitle('新增会议类型')
    setColor('#0000FF')
    MadalForm.setFieldsValue({ channelType: '', description: '' })
    setIsModalOpen(true)
  }
  const handleColor = (selectColor: any) => {
    setColor(`${selectColor.hex}`)
  }

  return (
    <div className="table-container">
      <div className="op-box">
        <Space>
          <button className="lmBtn" onClick={handleAdd}>
            新增类型
          </button>
        </Space>
      </div>
      <div className="data-table">
        <Spin tip="加载中，请稍等..." spinning={loading}>
          <Form form={form} component={false}>
            <Table
              bordered
              dataSource={data}
              columns={columns}
              rowClassName="editable-row"
              pagination={{ position: ['bottomCenter'], size: 'default' }}
            />
          </Form>
        </Spin>
      </div>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Spin tip="保存中，请稍等..." spinning={saveLoading}>
          <Form form={MadalForm}>
            <Form.Item
              name="channelType"
              label="会议类型"
              labelAlign="left"
              rules={Validate('会议类型')}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="标签颜色"
              labelAlign="left"
              className="Selectcolor rulesBefore"
              rules={Validate('标签颜色')}
            >
              <div
                className="showColor"
                style={{ backgroundColor: `${color}` }}
              ></div>
              <SketchPicker
                color={color}
                disableAlpha={true}
                onChange={color => {
                  handleColor(color)
                }}
              />
            </Form.Item>
            <Form.Item
              name="description"
              label="类型描述"
              labelAlign="left"
              rules={Validate('类型描述')}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </div>
  )
}
export default MeetingType
