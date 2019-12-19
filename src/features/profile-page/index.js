import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Typography } from 'antd'
import { Redirect, useParams } from 'react-router'

import users from '__mocks__/mock-data'

import { MyContext } from '../../App'

import {
  StyledProfileContainer,
  StyledProfileAvatarLoader,
  StyledProfileAvatarContainer,
  StyledProfileContent,
  StyledProfileSpan,
} from './styled-components'

const { Paragraph } = Typography

const Profile = () => {
  const { id } = useParams()

  const [currentUser, logo, setLogo] = useContext(MyContext)

  const user = users.find(x => x.id === Number(id)) || currentUser
  const [project, setProject] = useState(user.project)
  useEffect(() => {
    setLogo(`${user.logo}?img=${id}`)
  }, [user.logo, id, setLogo])

  const loadImage = event => {
    const img = URL.createObjectURL(event.target.files[0])
    setLogo(img)
  }
  const onChange = str => {
    setProject(str)
  }

  return id > users.length ? (
    <Redirect to="/404" />
  ) : (
    <StyledProfileContainer>
      <StyledProfileAvatarContainer>
        <Avatar
          style={{
            background: '#cc4125',
            marginBottom: '10px',
          }}
          size={164}
          icon="user"
          src={logo}
        />
        {user.id === currentUser.id && (
          <>
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
          </>
        )}
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
        <StyledProfileSpan>
          <b>Project: </b>
          {user.id === currentUser.id ? (
            <Paragraph editable={{ onChange }}>{project}</Paragraph>
          ) : (
            project
          )}
        </StyledProfileSpan>
      </StyledProfileContent>
    </StyledProfileContainer>
  )
}

export default Profile
