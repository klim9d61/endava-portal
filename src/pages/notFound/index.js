import React from 'react'
import { Result, Icon } from 'antd'

import { FormButton } from '../login/styles'

const NotFoundPage = ({ history }) => {
  return (
    <div style={{ padding: '40px 0', height: '100vh' }}>
      <Result
        style={{ paddingTop: '80px' }}
        icon={<Icon style={{ fontSize: '90px' }} type="frown" theme="filled" />}
        title="404"
        subTitle="The page you visited does not exist."
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

export default NotFoundPage
