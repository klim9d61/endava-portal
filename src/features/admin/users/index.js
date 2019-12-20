import React, { useState, useEffect } from 'react'
import {
  PageHeader,
  Button,
  Table,
  Avatar,
  Tag,
  Modal,
  Popconfirm,
  message,
} from 'antd'

import userData from '../../../__mocks__/mock-data'

import UserForm from './user-form'

const { Column } = Table

const Users = () => {
  const [users, setUsers] = useState(userData)

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const [modalTitle, setModalTitle] = useState('')
  const [modalBody, setModalBody] = useState(null)
  const [modalVisile, setModalVisible] = useState(false)

  const handleAddUser = data => {
    const id = users.length + 1
    const logo = `https://i.pravatar.cc/300?u=${id}`
    setUsers([...users, { ...data, id, logo }])
    message.success(`The user: ${data.username}, was added successfully!`)
  }

  const handleDeleteUser = data => {
    const updatedUsers = users.filter(user => user.id !== data.id)
    setUsers(updatedUsers)
    message.success('User deleted!')
  }

  const handleEditUser = data => {
    const updatedUsers = users.map(user => {
      if (user.id === data.id) {
        return { ...user, ...data }
      }

      return user
    })

    setUsers(updatedUsers)
    message.success(`Changes saved!`)
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  const showAddUserModal = () => {
    setModalTitle('Add user')
    setModalBody(<UserForm onSubmit={handleAddUser} onCancel={handleCancel} />)
    setModalVisible(true)
  }

  const showEditUserModal = user => {
    setModalTitle(`Edit user`)
    setModalBody(
      <UserForm
        user={user}
        onSubmit={handleEditUser}
        onCancel={handleCancel}
      />,
    )
    setModalVisible(true)
  }

  return (
    <PageHeader
      ghost={false}
      title="Users"
      extra={
        <Button type="primary" icon="user-add" onClick={showAddUserModal}>
          Add user
        </Button>
      }
    >
      <Table
        dataSource={users}
        rowKey="id"
        bordered
        scroll={{ x: 'max-content' }}
        style={{
          marginTop: '24px',
        }}
      >
        <Column
          title="Avatar"
          dataIndex="logo"
          align="center"
          render={(src, user) => <Avatar src={`${src}?u=${user.id}`} />}
        />
        <Column title="First name" dataIndex="firstName" />
        <Column title="Last name" dataIndex="lastName" />
        <Column title="Birthday" dataIndex="birthday" />
        <Column title="Username" dataIndex="username" />
        <Column
          title="Password"
          dataIndex="password"
          render={password => '*'.repeat(password.length)}
        />
        <Column
          title="Role"
          dataIndex="role"
          render={role => <Tag color="blue">{role}</Tag>}
        />
        <Column title="Job title" dataIndex="position" />
        <Column title="Project" dataIndex="project" />
        <Column
          title="Action"
          dataIndex="action"
          fixed="right"
          align="center"
          render={(text, user) => (
            <>
              <Button
                shape="circle"
                icon="edit"
                style={{ marginRight: '12px' }}
                onClick={() => showEditUserModal(user)}
              />
              <Popconfirm
                title="User will be deleted!"
                placement="topRight"
                onConfirm={() => handleDeleteUser(user)}
                onCancel={() => 2}
              >
                <Button shape="circle" icon="delete" type="danger" />
              </Popconfirm>
            </>
          )}
        />
      </Table>
      <Modal
        centered
        visible={modalVisile}
        title={modalTitle}
        footer={null}
        onCancel={handleCancel}
      >
        {modalBody}
      </Modal>
    </PageHeader>
  )
}

export default Users
