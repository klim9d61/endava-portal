import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Form,
  Upload,
  message,
  Icon,
  Input,
  DatePicker,
  Select,
  Button,
} from 'antd'
import moment from 'moment'

const { Dragger } = Upload
const { Option } = Select

const UserForm = ({ onSubmit, onCancel, user, form }) => {
  const {
    getFieldDecorator,
    setFieldsValue,
    validateFields,
    resetFields,
  } = form

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)

    validateFields((err, values) => {
      if (err) {
        setIsLoading(false)
        return
      }

      const data = {
        ...values,
        id: user ? user.id : null,
        logo: user ? user.logo : '',
        birthday: values.birthday.format('DD/MM/YY'),
      }

      setTimeout(() => {
        onSubmit(data)
        setIsLoading(false)
        onCancel()
        resetFields()
      }, 500)
    })
  }

  const handleCancel = () => {
    onCancel()
    resetFields()
  }

  useEffect(() => {
    if (user) {
      const { id, birthday, username, logo } = user
      setFieldsValue({
        ...user,
        birthday: moment(birthday, 'DD-MM-YY'),
        logo: [
          {
            uid: id,
            name: username,
            status: 'done',
            url: `${logo}?u=${id}`,
            thumbUrl: `${logo}?u=${id}`,
          },
        ],
      })
    } else {
      resetFields()
    }
  }, [user])

  const normFile = e => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  const draggerProps = {
    accept: '.png,.jpg',
    listType: 'picture',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    beforeUpload: file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'

      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
      }

      return isJpgOrPng
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item>
            {getFieldDecorator('logo', {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            })(
              <Dragger {...draggerProps}>
                <p className="ant-upload-drag-icon">
                  <Icon type="user" />
                </p>
                <p className="ant-upload-text">
                  Click or drag image to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Upload an image to be used as your profile picture, .png and
                  .jpg formats are supported
                </p>
              </Dragger>,
            )}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="First name">
            {getFieldDecorator('firstName', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Last name">
            {getFieldDecorator('lastName', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Birthday">
            {getFieldDecorator('birthday', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<DatePicker />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Role">
            {getFieldDecorator('role', {
              initialValue: 'user',
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Select>
                <Option value="admin">Administrator</Option>
                <Option value="user">User</Option>
              </Select>,
            )}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Job title">
            {getFieldDecorator('position', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Project">
            {getFieldDecorator('project', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Username">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input type="password" />)}
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row type="flex" justify="end" gutter={16}>
            <Col>
              <Form.Item>
                <Button onClick={handleCancel}>Cancel</Button>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button loading={isLoading} type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default Form.create({ name: 'user_form' })(UserForm)
