import { useFilter } from "@/hooks/useFilter"
import { Button } from "../ui/button"
import { SelectCategory } from "./SelectCategory"

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



const FilterBar = () => {
    const { filter, setFilter } = useFilter()

    const handlePreviousMonth = () => {
        if (filter.month === 0) {
            setFilter({ month: 11, year: filter.year - 1 })
        } else {
            setFilter({ month: filter.month - 1 })
        }
    }

    const handleNextMonth = () => {
        if (filter.month === 11) {
            setFilter({ month: 0, year: filter.year + 1 })
        } else {
            setFilter({ month: filter.month + 1 })
        }
    }

    return (
        <>
            <div className="flex justify-end items-center gap-3">
                <h2 className="mr-auto">Overview</h2>
                <Button variant={"outline"} size={"sm"} onClick={handlePreviousMonth}>
                    ←
                </Button>
                <span className="font-medium text-sm min-w-32 text-center">
                    {MONTHS[filter.month]} {filter.year}
                </span>

                <Button variant={"outline"} size={"sm"} onClick={handleNextMonth}>
                    →
                </Button>
                <SelectCategory
                    value={filter.category}
                    onValueChange={(value) => setFilter({ category: value })}
                />
            </div>
        </>
    )
}

export { FilterBar }