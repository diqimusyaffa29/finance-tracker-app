import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"

function Sidebar() {
    const location = useLocation()

    const isActiveMenu = (path: string) => location.pathname === path

    const menus = [
        {label: "Dashboard", path:"/"},
        {label: "Transaction", path:"/transaction"},
        {label: "Budget", path:"/budget"}
    ]

    return (
        <aside className="flex flex-col border-r p-4 h-screen w-64 gap-4">
            <div className="text-lg font-semibold px-2 text-center">Finance Tracker</div>

            <nav className="flex flex-col gap-1">
                {menus.map((menu)=>(
                    <Button
                        key={menu.path}
                        variant={isActiveMenu(menu.path) ? "default" : "ghost"}
                        asChild
                    >
                        <Link to={menu.path}>{menu.label}</Link>
                    </Button>
                ))}
            </nav>
        </aside>
    )
}

export { Sidebar }