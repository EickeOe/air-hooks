import setSearchParams from "@/utils/setSearchParams"
import useSearchParamsValue from "./useSearchParamsValue"

export default function useSearchParams(){
    const searchState = useSearchParamsValue()
    return [searchState,setSearchParams]
}