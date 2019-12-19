import React from 'react'
import { Result, Icon } from 'antd'

import { FormButton } from '../login/styles'

const NotAuthorized = ({ history }) => {
  return (
    <div style={{ padding: '40px 0' }}>
      <Result
        icon={<Icon style={{ fontSize: '90px' }} type="lock" theme="filled" />}
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <FormButton
            style={{ width: '150px' }}
            onClick={() => history.push('/')}
            type="primary"
          >
            Back Home
          </FormButton>
        }
      />
    </div>
  )
}

export default NotAuthorized
