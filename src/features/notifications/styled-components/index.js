import styled from 'styled-components'
import { List } from 'antd'

export const NotificationsContainer = styled(List)`
  .ant-list-items {
    background: transparent;
  }

  .ant-list-item {
    background-color: #fff;
    margin: 1rem 0;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #fcfafa;
    }
  }

  .ant-list-item-extra {
    display: flex;
    align-items: center;
  }
`
