import {LayoutDashboard, Zap} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar"
import {Link} from "@inertiajs/react"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "dashboard",
        icon: LayoutDashboard,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent className="bg-gradient-to-b from-slate-800 to-gray-900">
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-4">
                        <div className="flex items-center gap-4">
                            <Zap className="text-white cursor-pointer"/>
                            <span className="text-xl text-white font-bold">Laravel TSX</span>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="hover:bg-slate-700 active:bg-slate-700">
                                        <Link href={item.url ? route(item.url) : "#"}>
                                            <item.icon className="text-white"/>
                                            <span className="text-white">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
