import { FilterState } from "../types/finance.types"
import { useFinance } from "./useFinance"

function useFilter() {
    const { state, dispatch } = useFinance()
    const setFilter = (payload: Partial<FilterState>) => {
        dispatch({ type: "SET_FILTER", payload: payload })
    }

    return {
        filter: state.filter,
        setFilter
    }
}

export { useFilter }