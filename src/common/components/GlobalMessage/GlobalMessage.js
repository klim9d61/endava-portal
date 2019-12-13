import { message } from 'antd'
import { bool } from 'prop-types'

const globalMessage = typeMessage => {
  return typeMessage
    ? message.success('This is an success message')
    : message.error('This is an error message')
}

globalMessage.propTypes = {
  typeMessage: bool.isRequired,
}

export default globalMessage
