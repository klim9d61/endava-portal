import { Card } from 'antd'
import styled from 'styled-components'

export const StyledNewsContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {
    position: fixed;
    display: flex;
    align-items: center;
  }
  .anticon {
    position: fixed;
    opacity: 0.5;
    margin-bottom: 3rem;
    margin-right: 3rem;
    right: 0;
    bottom: 0;
    &:hover {
      opacity: 1;
    }
  }
`

export const StyledNewsPublishingDate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`

export const StyledCard = styled(Card)`
  width: 100%;
  .ant-card-body {
    display: flex;
    height: 200px;
  }
`

export const StyledCardContent = styled.div`
  width: 60%;
  padding-left: 25px;
`

export const StyledCardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`
