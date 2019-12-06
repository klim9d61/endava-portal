import styled from 'styled-components'
import { List } from 'antd'

export const NotificationsContainer = styled(List)`
  .ant-list-items {
    border-radius: 3px;
    box-shadow: 2px 2px 21px 1px rgba(0, 0, 0, 0.2);
  }

  .ant-list-item {
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #ecebf3;
    }
  }

  .ant-list-item-extra {
    display: flex;
    align-items: center;
  }
`
