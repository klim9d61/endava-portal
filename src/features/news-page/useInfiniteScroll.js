import { useState, useEffect } from 'react'

import { URL, uniqueId } from './constants'

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

        const notifications = news.articles.reduce(
          (acc, { title, content, description, urlToImage }, i) => {
            return [
              ...acc,
              {
                id: uniqueId(),
                title,
                href: urlToImage,
                avatar: 'https://i.pravatar.cc/300',
                description,
                content,
              },
            ]
          },
          [],
        )
        localStorage.setItem('notifications', JSON.stringify(notifications))
      })
      .catch(err => Error(err))
  }, [pageNumber])

  return { isLoading, hasMore, news }
}

export default useInfiniteScroll
