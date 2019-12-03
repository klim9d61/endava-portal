import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledCard,
  StyledCardContainer,
  StyledCardContent,
  StyledNewsPublishingDate,
} from './styled-components'

const NewsCard = ({
  observer,
  author,
  title,
  img,
  source,
  published,
  sourceUrl,
  description = 'asdasd',
}) => {
  const date = new Date(published).toLocaleString()
  return (
    <StyledCardContainer ref={observer}>
      <StyledCard
        style={{ margin: '20px 0' }}
        title={title}
        extra={<a href="/">More</a>}
      >
        <img style={{ width: '20%' }} alt="IMG" src={img} />
        <StyledCardContent>
          <a href={sourceUrl}>{source}</a>
          <br />
          {description}
          {author}
        </StyledCardContent>
        <StyledNewsPublishingDate>{date}</StyledNewsPublishingDate>
      </StyledCard>
    </StyledCardContainer>
  )
}

NewsCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  observer: PropTypes.func,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default NewsCard
