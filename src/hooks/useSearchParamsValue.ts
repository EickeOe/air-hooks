import { useMemo } from 'react'
import getSearchParams from '@/utils/getSearchParams'
import useLocation from './useLocation'

export default function useSearchParamsValue<T extends { [key: string]: any }>(): T {
  const search = useLocation()?.search
  const query = useMemo(() => {
    return getSearchParams(search ?? '')
  }, [search]) as T

  return query
}