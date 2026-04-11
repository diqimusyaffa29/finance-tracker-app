import type { FinanceAction, FinanceState } from "../types/finance.types";

const now = new Date()

export const initialState: FinanceState = {
    transactions: [],
    budgets:[],
    filter: {
        year: now.getFullYear(),
        month: now.getMonth(),
        category: "all"
    },
}

export function financeReducer(state: FinanceState, action: FinanceAction) : FinanceState{
    switch (action.type) {
        case "ADD_TRANSACTION":    
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case "DELETE_TRANSACTION":    
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }

        case "EDIT_TRANSACTION":    
            return {
                ...state,
                transactions: state.transactions.map(t => t.id === action.payload.id ? action.payload : t)
            }
        case "SET_FILTER":   
            return {
                ...state,
                filter: {...state.filter, ...action.payload}
            }
        default:
            return state;
    }
}