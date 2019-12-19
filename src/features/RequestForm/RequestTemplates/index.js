import React from 'react'
import { Form } from 'antd'
import { shape, func, string, arrayOf, object } from 'prop-types'

import { requestForm, setDataLocalStorage } from 'common/utils'
import globalMessage from 'common/components/GlobalMessage/GlobalMessage'

const RequestTemplates = ({ form, eventRequestList, eventRequestType }) => {
  const { getFieldDecorator } = form

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        setDataLocalStorage(values, eventRequestType)
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
      {requestForm(eventRequestList, getFieldDecorator)}
    </Form>
  )
}

RequestTemplates.propTypes = {
  form: shape({
    getFieldsValue: func,
  }).isRequired,
  eventRequestList: arrayOf(object).isRequired,
  eventRequestType: string.isRequired,
}

const withForm = Form.create({ name: 'eventRequest' })

export default withForm(RequestTemplates)
