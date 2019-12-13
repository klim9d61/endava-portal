import React, { useState } from 'react'
import { Avatar } from 'antd'

import {
  StyledProfileContainer,
  StyledProfileAvatarLoader,
  StyledProfileAvatarContainer,
  StyledProfileContent,
  StyledProfileSpan,
} from './styled-components'

const Profile = () => {
  const [img, setImg] = useState('')

  const state = {
    img,
    firstName: 'Raq',
    lastName: 'Qar',
    birthday: '12 01 1990',
    role: 'User',
    position: 'Senior developer',
  }

  const loadImage = event => {
    const img = URL.createObjectURL(event.target.files[0])
    setImg(img)
  }
  return (
    <StyledProfileContainer>
      <StyledProfileAvatarContainer>
        <Avatar
          style={{
            background: '#cc4125',
            marginBottom: '10px',
          }}
          size={164}
          icon="user"
          src={img}
        />
        <input
          onChange={loadImage}
          type="file"
          name="file"
          id="file"
          style={{
            width: '0.1px',
            height: '0.1px',
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            zIndex: -1,
          }}
        />
        <StyledProfileAvatarLoader htmlFor="file">
          &#9729; Choose a file...
        </StyledProfileAvatarLoader>
      </StyledProfileAvatarContainer>
      <StyledProfileContent>
        <StyledProfileSpan>
          <b>Name: </b>
          {`${state.firstName} ${state.lastName}`}
        </StyledProfileSpan>
        <StyledProfileSpan>
          <b>Role: </b>
          {state.role}
        </StyledProfileSpan>
        <StyledProfileSpan>
          <b>Position: </b>
          {state.position}
        </StyledProfileSpan>
        <StyledProfileSpan>
          <b>Birthday: </b>
          {state.birthday}
        </StyledProfileSpan>
      </StyledProfileContent>
    </StyledProfileContainer>
  )
}

export default Profile
