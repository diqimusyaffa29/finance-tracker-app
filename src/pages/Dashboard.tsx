import { FilterBar } from "@/components/dashboard/FilterBar"
import { SummarySection } from "@/components/dashboard/SummarySection"

function Dashboard() {
    return (
        <>
            <div className="p-4">
                <FilterBar />
            </div>
            <div className="bg-gray-100 p-2 h-screen">
                <SummarySection />
            </div>
        </>
    )
}

export { Dashboard }