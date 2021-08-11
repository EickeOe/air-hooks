import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import getQueryParams from '@/utils/getQueryParams'

export default function useQueryParams<T extends { [key: string]: any }>(): T {
  const search = useLocation()?.search
  const query = useMemo(() => {
    return getQueryParams(search)
  }, [search]) as T

  return query
}
