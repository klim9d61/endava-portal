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
  const user = JSON.parse(localStorage.getItem('currentUser'))

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
          src={img || user.logo}
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
          {`${user.firstName} ${user.lastName}`}
        </StyledProfileSpan>
        <StyledProfileSpan>
          <b>Role: </b>
          {user.role}
        </StyledProfileSpan>
        <StyledProfileSpan>
          <b>Position: </b>
          {user.position}
        </StyledProfileSpan>
        <StyledProfileSpan>
          <b>Birthday: </b>
          {user.birthday}
        </StyledProfileSpan>
      </StyledProfileContent>
    </StyledProfileContainer>
  )
}

export default Profile
