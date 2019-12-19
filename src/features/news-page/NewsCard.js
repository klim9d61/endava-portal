import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'

import { defaultImg } from './constants'

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
  const { Panel } = Collapse
  const date = new Date(published).toLocaleString()
  return (
    <StyledCardContainer ref={observer}>
      <Collapse destroyInactivePanel bordered={false}>
        <Panel
          showArrow={false}
          header={
            <StyledCard style={{ margin: '20px 0' }} title={title}>
              <img style={{ width: '20%' }} alt="IMG" src={img || defaultImg} />
              <StyledCardContent>
                <br />
                {description}
                {author}
              </StyledCardContent>
              <StyledNewsPublishingDate>{date}</StyledNewsPublishingDate>
            </StyledCard>
          }
          key={title}
        >
          <a target="_blank" rel="noopener noreferrer" href={sourceUrl}>
            {source}
          </a>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ex
          impedit itaque minima nisi nobis nulla numquam obcaecati pariatur
          perferendis qui, voluptate voluptatem voluptates. Aspernatur
          blanditiis corporis, culpa dolor dolore dolores dolorum eius eos, est
          excepturi harum laudantium nam natus necessitatibus odit porro quaerat
          quasi tempora ullam veritatis. Accusantium alias, aperiam cum
          distinctio dolores eaque harum impedit ipsum iure maxime nemo nihil
          nobis nostrum, perferendis quibusdam quod saepe, sapiente tempora
          temporibus vero. Accusantium culpa deleniti dicta doloremque dolores
          eos excepturi illo, ipsam iusto laudantium nam neque nisi nobis odio
          placeat porro quae quaerat quibusdam quo quod quos sapiente soluta
          voluptatem.
        </Panel>
      </Collapse>
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
