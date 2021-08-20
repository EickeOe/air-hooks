import formatURLSearchParams from "./formatURLSearchParams"
import getSearchParams from "./getSearchParams"

export default function setSearchParams(searchParams: { [key: string]: any }){
    const {search,pathname} = location
    const oldParams = new URLSearchParams(search)
    searchParams = {
      ...getSearchParams(search),
      ...searchParams
    }
    const params = formatURLSearchParams(searchParams)
    const query = params.toString()
    if (oldParams.toString() !== query) {
      history.replaceState(
        {
          key: Math.random().toString(36).substr(2, 6),
          state: undefined
        },
        null as any,
        `${pathname}?${query}`
      )
    }
  }