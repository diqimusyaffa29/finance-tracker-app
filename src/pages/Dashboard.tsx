import { ExpenseChart } from "@/components/dashboard/ExpenseChart"
import { FilterBar } from "@/components/dashboard/FilterBar"
import { SummarySection } from "@/components/dashboard/SummarySection"
import TopThreeCategories from "@/components/dashboard/TopThreeCategories"

function Dashboard() {
    return (
        <>
            <div className="p-4">
                <FilterBar />
            </div>
            <div className="bg-gray-100 p-2 h-screen space-y-5">
                <SummarySection />
                <div className="grid grid-cols-3 items-start space-x-3">
                    <div className="grid space-y-2 col-span-2">
                        <ExpenseChart />
                        <ExpenseChart />
                    </div>
                    <div className="grid">
                        <TopThreeCategories />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Dashboard }