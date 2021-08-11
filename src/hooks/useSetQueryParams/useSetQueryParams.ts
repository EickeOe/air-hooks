import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import getQueryParams from '@/utils/getQueryParams'

export default function useSetQueryParams(searchParams: { [key: string]: any }) {
  const { pathname, search } = useLocation()
  const history = useHistory()
  useEffect(() => {
    const params = new URLSearchParams()
    const oldParams = new URLSearchParams(search)
    searchParams = {
      ...getQueryParams(search),
      ...searchParams
    }
    for (const key in searchParams) {
      const value = searchParams[key]
      if (value instanceof Array) {
        for (const v of value) {
          params.append(key, v)
        }
      } else if (value instanceof Object) {
        params.append(key, JSON.stringify(value))
      } else if (value !== null && value !== undefined) {
        params.append(key, value)
      }
    }
    const query = params.toString()
    if (oldParams.toString() !== query) {
      history.replace(`${pathname}?${query}`)
    }
  }, [searchParams])
}
