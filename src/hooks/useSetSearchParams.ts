import { useEffect } from 'react'
import setSearchParams from '@/utils/setSearchParams'

export default function useSetQueryParams(searchParams: { [key: string]: any }) {
  useEffect(() => {
    setSearchParams(searchParams)
  }, [searchParams])
}
