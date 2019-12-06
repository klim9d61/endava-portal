import React from 'react'
import { Form, Icon, Input, Card } from 'antd'
import { shape, func } from 'prop-types'

import logo from 'assets/favicon.ico'

import { Wrapper, CardTitle, FormButton } from './styles'

const LoginForm = ({ form }) => {
  const { getFieldDecorator } = form

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
        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'please input your username' },
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
                { required: true, message: 'please input your password' },
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
}

const LoginPage = Form.create({ name: 'normal_login' })(LoginForm)

export default LoginPage
