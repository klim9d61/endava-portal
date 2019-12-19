import React from 'react'
import * as shortId from 'short-id'
import {
  Icon,
  Menu,
  Button,
  Form,
  Input,
  Tooltip,
  Select,
  DatePicker,
} from 'antd'
import { NavLink } from 'react-router-dom'

import {
  rangePickerSelect,
  submitBtn,
  typeButton,
  typeInput,
  typeMultipleSelect,
  typeSelect,
  typeTextarea,
} from 'features/constants'
import RequestTemplates from 'features/RequestForm/RequestTemplates'

const { Item, SubMenu } = Menu

// Menu Creator
export const MenuCreator = menuListItems =>
  menuListItems.map(({ submenu, path, name, icon }) =>
    submenu.length ? (
      <SubMenu
        key={shortId.generate()}
        title={
          <NavLink
            exact
            to={path}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            <Icon type={icon} />
            <span>{name}</span>
          </NavLink>
        }
      >
        {MenuCreator(submenu)}
      </SubMenu>
    ) : (
      <Item key={shortId.generate()}>
        <NavLink
          exact
          to={path}
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          <Icon type={icon} />
          <span>{name}</span>
        </NavLink>
      </Item>
    ),
  )

// Request form add to localStorage
export const setDataLocalStorage = (values, request) => {
  let existingRequest = JSON.parse(localStorage.getItem(request)) || []
  existingRequest = [...existingRequest, values]
  localStorage.setItem(request, JSON.stringify(existingRequest))
}

// Request TPL
export const setTypeForm = (eventRequestList, eventRequestType) => (
  <RequestTemplates
    eventRequestList={eventRequestList}
    eventRequestType={eventRequestType}
  />
)

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
          {tooltip && (
            <Tooltip title={label}>
              <Icon type="question-circle-o" />
            </Tooltip>
          )}
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
