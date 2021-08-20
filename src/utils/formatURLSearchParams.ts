export default function formatURLSearchParams(searchParams: { [key: string]: any }){
    const params = new URLSearchParams()
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
    return params
  }