import * as React from "react"
import {
    Bot, CalendarCheck2Icon,
    GalleryVerticalEnd,
    ShoppingBasketIcon,
    SquareTerminal,
} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavProjects} from "@/components/nav-projects"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "https://github.com/shadcn.png",
    },
    teams: [
        {
            name: "Mikademy LTD",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
    ],
    navMain: [
        {
            title: "Playground",
            url: "/#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Portfolio",
                    url: "/portfolio",
                },
                {
                    title: "Dashboard",
                    url: "/dashboard",
                },
            ],
        },
    ],
    projects: [
        {
            name: "E-commerce Platform",
            url: "#",
            icon: ShoppingBasketIcon,
        },
        {
            name: "Task Management App",
            url: "#",
            icon: CalendarCheck2Icon,
        },
        {
            name: "AI Chat Interface",
            url: "#",
            icon: Bot,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                <NavProjects projects={data.projects}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
