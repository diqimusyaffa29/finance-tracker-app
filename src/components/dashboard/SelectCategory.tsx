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

const categories: Category[] = [
    "entertainment",
    "food",
    "health",
    "saving",
    "shopping",
    "transport",
    "others"
]

export function SelectCategory() {
    return (
        <Select>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    {/* <SelectLabel>Categories</SelectLabel> */}
                    {categories.map((item) => (
                        <SelectItem value={item} key={item} >{toTitleCase(item)}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}
