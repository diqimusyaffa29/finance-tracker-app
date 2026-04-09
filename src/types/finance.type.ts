type Category =
    | 'food'
    | 'transport'
    | 'entertainment'
    | 'health'
    | 'shopping'
    | 'saving'
    | 'others'

type Transaction = {
    id: string
    description: string
    amount: number
    type: 'income' | 'expense'
    category: Category
    date: string
}

type Budget = {
    id: string
    category: Category
    limit: number
}

type FilterState = {
    month: number
    year: number
    category: Category | 'all'
}

type FinanceState = {
    transactions: Transaction[]
    budgets: Budget[]
    filter: FilterState
}

type FinanceAction =
    | { type: 'ADD_TRANSACTION'; payload: Transaction }
    | { type: 'DELETE_TRANSACTION'; payload: string } //payload id
    | { type: 'SET_FILTER'; payload: Partial<FilterState> }



export type { Budget, FilterState, FinanceAction, FinanceState, Transaction, Category }