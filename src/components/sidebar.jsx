import { Calendar, ChartBarIcon, Home, TrendingUp, Package, Plus, IdCardIcon, Inbox, Search, ShoppingBasketIcon, ShoppingCart, ShoppingCartIcon } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: Home,
    },
    {
        title: "Revenue Analysis",
        url: "/revenue",
        icon: TrendingUp,
    },
    {
        title: "Inventory Mangement",
        url: "/inventory",
        icon: Package,
    },
    {
        title: "Production Registration",
        url: "/production",
        icon: Plus,
    },

]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <div className="flex aspect-square size-8 items-center mt-8 justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <ShoppingCart className="size-4" />
                        </div>
                        <div className="flex flex-col mt-8 gap-0.5 leading-none mx-3">
                            <span className="font-bold text-black text-[16px]">E-Commerce Admin</span>
                            <span className="ext-[12px]">Dashboard</span>

                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="mt-24 ">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
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
