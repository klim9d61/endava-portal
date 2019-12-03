import { useState, useEffect } from 'react'

import URL from './constants'

const useInfiniteScroll = pageNumber => {
  const [isLoading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [news, setNews] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(URL + pageNumber)
      .then(res => res.json())
      .then(news => {
        setNews(prevState => {
          return [...prevState, ...news.articles]
        })
        setHasMore(news.articles.length > 0)
        setLoading(false)
      })
      .catch(err => throw new Error(err))
  }, [pageNumber])

  return { isLoading, hasMore, news }
}

export default useInfiniteScroll
