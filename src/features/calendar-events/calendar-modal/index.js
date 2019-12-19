import React from 'react'
import { Input, Modal } from 'antd'
import { bool, func, string } from 'prop-types'

const EventModal = ({ visible, onOk, onCancel, value, onChange }) => {
  return (
    <Modal
      title="Event title"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Input
        value={value}
        onChange={onChange}
        placeholder="Add event title..."
      />
    </Modal>
  )
}

EventModal.propTypes = {
  visible: bool.isRequired,
  onOk: func.isRequired,
  onCancel: func.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
}

export default EventModal
