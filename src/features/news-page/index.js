import React, { useState, useRef, useCallback } from 'react'
import { Spin } from 'antd'

import { StyledNewsContainer } from './styled-components'
import useInfiniteScroll from './useInfiniteScroll'
import NewsCard from './NewsCard'

const NewsPage = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const { news, hasMore, isLoading } = useInfiniteScroll(pageNumber)

  const observer = useRef()

  const lastLoadedNews = useCallback(
    node => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevState => prevState + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore],
  )

  return (
    <StyledNewsContainer>
      <Spin spinning={isLoading} size="large">
        {news.map((e, index) => {
          if (news.length === index + 1) {
            return (
              <NewsCard
                key={e.title}
                observer={lastLoadedNews}
                description={e.description}
                author={e.author || 'unknown'}
                img={e.urlToImage}
                published={e.publishedAt}
                source={e.source.name}
                sourceUrl={e.url}
                title={e.title}
              />
            )
          }
          return (
            <NewsCard
              key={e.title}
              description={e.description}
              author={e.author || 'unknown'}
              img={e.urlToImage}
              published={e.publishedAt}
              source={e.source.name}
              sourceUrl={e.url}
              title={e.title}
            />
          )
        })}
      </Spin>
    </StyledNewsContainer>
  )
}

export default NewsPage
