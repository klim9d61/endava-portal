import styled from 'styled-components'
import { Button } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(77deg, rgba(204,65,37,1) 0%, rgba(138,42,22,1) 100%);
  background: #001529;
  height: 100vh;
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FormButton = styled(Button)`
  margin-top: 10px;
  cursor: pointer;
  background: #cc4125;
  padding: 13px 0;
  height: auto;
  width: 100%;
  color: white;
  font-size: 13px;
  border: none;
  border-radius: 50px;
  letter-spacing: 1.3px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #8a2a16;
    letter-spacing: 2.4px;
  }

  &:focus {
    background-color: #cc4125;
  }
`
