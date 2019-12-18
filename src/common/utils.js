import React from 'react'
import * as shortId from 'short-id'
import {
  Button,
  Form,
  Icon,
  Input,
  Menu,
  Tooltip,
  Select,
  DatePicker,
} from 'antd'
import { Link } from 'react-router-dom'

import {
  rangePickerSelect,
  submitBtn,
  typeButton,
  typeInput,
  typeMultipleSelect,
  typeSelect,
  typeTextarea,
} from 'features/constants'

const { Item, SubMenu } = Menu

// Menu Creator
export const MenuCreator = menuListItems =>
  menuListItems.map(({ submenu, path, name, icon }) =>
    submenu.length ? (
      <SubMenu
        key={shortId.generate()}
        title={
          <Link to={path}>
            <Icon type={icon} />
            <span>{name}</span>
          </Link>
        }
      >
        {MenuCreator(submenu)}
      </SubMenu>
    ) : (
      <Item key={shortId.generate()}>
        <Link to={path}>
          <Icon type={icon} />
          <span>{name}</span>
        </Link>
      </Item>
    ),
  )

// Request form add to localStorage
export const setDataLocalStorage = (values, request) => {
  const existingRequest = JSON.parse(localStorage.getItem(request)) || []
  existingRequest.push(values)
  localStorage.setItem(request, JSON.stringify(existingRequest))
}

// Form Creator
export const requestForm = (listMaterials, getFieldDecorator) => {
  const { TextArea } = Input
  const { Option } = Select
  const { RangePicker } = DatePicker
  return listMaterials.map(
    ({
      id,
      label,
      tooltip,
      nameStore,
      required,
      message,
      whitespace,
      typeField,
      htmlType,
      type,
      selectOption,
      typeSelectOption,
    }) => {
      const labelField = (
        <span>
          {label}
          &nbsp;
          {tooltip ? (
            <Tooltip title={label}>
              <Icon type="question-circle-o" />
            </Tooltip>
          ) : null}
        </span>
      )
      const fieldRules = [
        { required, message, whitespace, type: typeSelectOption },
      ]

      switch (typeField) {
        case typeInput:
          return (
            <Form.Item key={id} label={labelField}>
              {getFieldDecorator(nameStore, {
                rules: fieldRules,
              })(<Input />)}
            </Form.Item>
          )
        case typeTextarea:
          return (
            <Form.Item key={id} label={labelField}>
              {getFieldDecorator(nameStore, {
                rules: fieldRules,
              })(<TextArea />)}
            </Form.Item>
          )
        case typeSelect:
          return (
            <Form.Item key={id} label={labelField} hasFeedback>
              {getFieldDecorator(nameStore, {
                rules: fieldRules,
              })(
                <Select placeholder={message}>
                  {selectOption.map(selected => (
                    <Option key={shortId.generate()} value={selected}>
                      {selected}
                    </Option>
                  ))}
                </Select>,
              )}
            </Form.Item>
          )
        case typeMultipleSelect:
          return (
            <Form.Item key={id} label={labelField}>
              {getFieldDecorator(nameStore, {
                rules: fieldRules,
              })(
                <Select mode="multiple" placeholder={message}>
                  {selectOption.map(selected => (
                    <Option key={shortId.generate()} value={selected}>
                      {selected}
                    </Option>
                  ))}
                </Select>,
              )}
            </Form.Item>
          )
        case rangePickerSelect:
          return (
            <Form.Item key={id} label={labelField}>
              {getFieldDecorator(nameStore, {
                rules: fieldRules,
              })(<RangePicker />)}
            </Form.Item>
          )
        case typeButton:
          return (
            <Form.Item key={id} wrapperCol={{ span: 12, offset: 5 }}>
              <Button key={shortId.generate()} type={type} htmlType={htmlType}>
                {submitBtn}
              </Button>
            </Form.Item>
          )
        default:
          return <div>Field doesn&apos;t exist</div>
      }
    },
  )
}

export default null
