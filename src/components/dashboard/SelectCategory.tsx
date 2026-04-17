import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Category } from "@/types/finance.types"
import { toTitleCase } from "@/utils/toTitleCase"

type SelectCategoryProps = {
    value?: Category | "all"
    onValueChange: (value: Category | "all") => void
}


const categories: Category[] = [
    "entertainment",
    "food",
    "health",
    "saving",
    "shopping",
    "transport",
    "others"
]

export function SelectCategory({ value, onValueChange }: SelectCategoryProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    {/* <SelectLabel>Categories</SelectLabel> */}
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((item) => (
                        <SelectItem value={item} key={item} >{toTitleCase(item)}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}
