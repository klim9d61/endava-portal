import React, { useState } from 'react'
import { Form, Icon, Input, Card, Alert } from 'antd'
import { shape, func } from 'prop-types'

import logo from 'assets/favicon.ico'
import users from '__mocks__/mock-data'

import { Wrapper, CardTitle, FormButton } from './styles'

const LoginForm = ({ form, history }) => {
  const [loginError, setLoginError] = useState(false)
  const { getFieldDecorator, getFieldsValue, validateFields } = form

  const addToLocalStorage = user => {
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        logo: user.logo,
        project: user.project,
        position: user.position,
        birthday: user.birthday,
        token: Math.random()
          .toString(35)
          .substr(2),
      }),
    )
    history.push('/')
  }

  const handleSubmit = e => {
    e.preventDefault()
    setTimeout(() => {
      const { username, password } = getFieldsValue()
      const user = users.find(
        x => x.username === username && x.password === password,
      )
      validateFields(err => {
        if (!err && user) addToLocalStorage(user)
        else setLoginError(true)
      })
    }, 700)
  }

  return (
    <Wrapper>
      <Card
        bordered={false}
        style={{ width: '300px', padding: '20px 10px 5px' }}
      >
        <CardTitle>
          <h2
            style={{
              lineHeight: '1.3em',
              textAlign: 'left',
              marginBottom: '1.3em',
            }}
          >
            Welcome!
            <br />
            Please sign in.
          </h2>
          <img src={logo} style={{ height: '70%', width: '20%' }} alt="logo" />
        </CardTitle>
        <Form onSubmit={handleSubmit} className="login-form">
          {loginError ? (
            <Alert message="Invalid credentials" type="error" showIcon />
          ) : null}
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'please input your username',
                },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'please input your password',
                },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <FormButton type="primary" htmlType="submit">
              Continue
              <Icon type="arrow-right" />
            </FormButton>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  )
}

LoginForm.propTypes = {
  form: shape({
    getFieldDecorator: func.isRequired,
  }).isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

const LoginPage = Form.create({ name: 'normal_login' })(LoginForm)

export default LoginPage
