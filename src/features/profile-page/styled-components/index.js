import styled from 'styled-components'

export const StyledProfileContainer = styled.div`
  height: 100%;
  width: 97%;
  float: right;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`

export const StyledProfileSpan = styled.span`
  padding: 8px;
  font-size: 1.25em;
  border-radius: 5px;
  margin: 0 0 10px 0;
  user-select: none;
`

export const StyledProfileContent = styled.div`
  border-radius: 1rem;
  display: flex;
  margin: 2rem;
  flex-direction: column;
  padding: 1rem;
`

export const StyledProfileAvatarLoader = styled.label`
  padding: 6px 8px;
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: #cc4125;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    opacity: 0.8;
  }
`

export const StyledProfileAvatarContainer = styled.div`
  display: flex;
  margin: 1.5rem;
  flex-direction: column;
  padding: 1rem;
  width: 200px;
  justify-content: flex-start;
`
