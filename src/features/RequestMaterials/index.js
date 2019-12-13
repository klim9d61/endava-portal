import React from 'react'
import { Form, Select, Input, Button, Tooltip, Icon } from 'antd'
import { shape, func } from 'prop-types'
import * as shortId from 'short-id'

import {
  selectMaterials,
  selectLvl,
  fullNameInfo,
  lvlInfo,
  selectInfo,
  noteInfo,
  submitBtn,
  FullName,
  lvlUrgency,
  itAccessories,
  Note,
} from 'features/constants'
import globalMessage from 'common/components/GlobalMessage/GlobalMessage'

const { Option } = Select

const RequestMaterials = ({ form }) => {
  const { getFieldDecorator } = form
  const { TextArea } = Input

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('RequestEvents Materials', JSON.stringify(values))
        globalMessage(true)
        form.resetFields()
      }
    })
  }
  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 12 }}
      onSubmit={handleSubmit}
    >
      <Form.Item
        label={
          <span>
            {FullName}
            &nbsp;
            <Tooltip title={fullNameInfo}>
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator(FullName, {
          rules: [
            {
              required: true,
              message: fullNameInfo,
              whitespace: true,
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Select" hasFeedback>
        {getFieldDecorator(lvlUrgency, {
          rules: [{ required: true, message: lvlInfo }],
        })(
          <Select placeholder={lvlInfo}>
            {selectLvl.map(lvl => (
              <Option key={shortId.generate()} value={lvl}>
                {lvl}
              </Option>
            ))}
          </Select>,
        )}
      </Form.Item>
      <Form.Item label="Select[multiple]">
        {getFieldDecorator(itAccessories, {
          rules: [
            {
              required: true,
              message: selectInfo,
              type: 'array',
            },
          ],
        })(
          <Select mode="multiple" placeholder={selectInfo}>
            {selectMaterials.map(material => (
              <Option key={shortId.generate()} value={material}>
                {material}
              </Option>
            ))}
          </Select>,
        )}
      </Form.Item>
      <Form.Item
        label={
          <span>
            Note&nbsp;
            <Tooltip title={noteInfo}>
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator(Note, {
          rules: [{ required: false, message: { noteInfo } }],
        })(<TextArea />)}
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          {submitBtn}
        </Button>
      </Form.Item>
    </Form>
  )
}

RequestMaterials.propTypes = {
  form: shape({
    getFieldsValue: func,
  }).isRequired,
}

const withForm = Form.create({ name: 'requestMaterials' })

export default withForm(RequestMaterials)
