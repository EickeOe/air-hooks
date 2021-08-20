export const noop = () => {}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
  }
}

export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'


export { default as createFuncModal } from "./createFuncModal";
export { default as createUseContext } from "./createUseContext";
export { default as formatURLSearchParams } from "./formatURLSearchParams";
export { default as getNextState } from "./getNextState";
export { default as getSearchParams } from "./getSearchParams";
export { default as setSearchParams } from "./setSearchParams";