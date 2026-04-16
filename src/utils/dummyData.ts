import type { Transaction, Budget } from "../types/finance.types"

export const dummyTransactions: Transaction[] = [
    {
        id: "1",
        description: "Gaji bulanan",
        amount: 5000000,
        type: "income",
        category: "others",
        date: new Date().toISOString()
    },
    {
        id: "2",
        description: "Makan siang",
        amount: 50000,
        type: "expense",
        category: "food",
        date: new Date().toISOString()
    },
    {
        id: "3",
        description: "Grab",
        amount: 25000,
        type: "expense",
        category: "transport",
        date: new Date().toISOString()
    },
    {
        id: "4",
        description: "Nonton bioskop",
        amount: 75000,
        type: "expense",
        category: "entertainment",
        date: new Date().toISOString()
    },
    {
        id: "5",
        description: "Makan malam",
        amount: 80000,
        type: "expense",
        category: "food",
        date: new Date().toISOString()
    },
    {
        id: "6",
        description: "Freelance",
        amount: 2000000,
        type: "income",
        category: "others",
        date: new Date().toISOString()
    },
    {
        id: "7",
        description: "Obat",
        amount: 45000,
        type: "expense",
        category: "health",
        date: new Date().toISOString()
    }
]

export const dummyBudgets: Budget[] = [
    { id: "1", category: "food", limit: 500000 },
    { id: "2", category: "transport", limit: 200000 },
    { id: "3", category: "entertainment", limit: 300000 },
    { id: "4", category: "health", limit: 150000 }
]