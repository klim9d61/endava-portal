import React, { useState } from 'react'
import { Modal, PageHeader, Button, Row, Col, Card, Table, Tag } from 'antd'

import userData from '../../../__mocks__/mock-data'

const { Column, ColumnGroup } = Table

const Users = () => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)
  const [modalTitle, setModalTitle] = useState(``)
  const [modalBody, setModalBody] = useState(null)
  const gutter = [16, 16]

  const showAddModal = () => {
    setModalTitle(`Add user`)
    setModalBody(`Add user form`)
    setModalVisibility(true)
  }

  const showEditModal = data => {
    setModalTitle(`Edit user`)
    setModalBody(JSON.stringify(data))
    setModalVisibility(true)
  }

  const handleModalOk = () => {
    setModalLoading(true)
    setTimeout(() => {
      setModalLoading(false)
      setModalVisibility(false)
    }, 2500)
  }

  const handleModalCancel = () => {
    setModalVisibility(false)
  }

  return (
    <>
      <Modal
        title={modalTitle}
        visible={modalVisibility}
        footer={[
          <Button key="back" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={modalLoading}
            onClick={handleModalOk}
          >
            Save
          </Button>,
        ]}
      >
        {modalBody}
      </Modal>
      <Row gutter={gutter}>
        <Col span={22} push={1}>
          <PageHeader
            ghost={false}
            title="Users"
            extra={[
              <Button
                key="1"
                type="primary"
                icon="user-add"
                onClick={showAddModal}
              >
                Add user
              </Button>,
            ]}
          />
        </Col>
      </Row>
      <Row gutter={gutter}>
        <Col span={22} push={1}>
          <Card>
            <Table
              dataSource={userData}
              rowKey="id"
              bordered
              scroll={{ x: 1500 }}
            >
              <ColumnGroup title="Name">
                <Column
                  title="First Name"
                  dataIndex="firstName"
                  key="firstName"
                />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
              </ColumnGroup>
              <Column title="Username" dataIndex="username" key="username" />
              <Column title="Password" dataIndex="password" key="password" />
              <Column
                title="Roles"
                dataIndex="role"
                key="role"
                render={text => <Tag color="blue">{text}</Tag>}
              />
              <Column title="Position" dataIndex="position" key="position" />
              <Column title="Project" dataIndex="project" key="project" />
              <Column
                title="Action"
                key="action"
                fixed="right"
                width={100}
                render={(text, record) => (
                  <Button type="link" onClick={() => showEditModal(record)}>
                    Edit
                  </Button>
                )}
              />
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default Users
