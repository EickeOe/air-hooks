import { useRef } from 'react'

export type noop = (...args: any[]) => any

export default function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn)
  fnRef.current = fn

  const persistFn = useRef<T>()
  if (!persistFn.current) {
    persistFn.current = function (...args) {
      // @ts-ignore
      return fnRef.current!.apply(this, args)
    } as T
  }

  return persistFn.current!
}
