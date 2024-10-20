"use client"

import React from 'react'
import { Nav } from '@/components/ui/nav'
import { House, List, UserX, Route, BringToFront, Users, ChartArea, Mic, GraduationCap, ArrowLeftRight, Network, FolderOpen } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <TooltipProvider>
            <Nav
                isCollapsed={false}
                links={[
                    {
                        title: "Dashboard",
                        icon: House,
                        variant: "default",
                        href: "/"
                    },
                    {
                        title: "Waitlist",
                        icon: List,
                        variant: "ghost",
                        href: "/waitlist"
                    },
                    {
                        title: "Rejected",
                        icon: UserX,
                        variant: "ghost",
                        href: "/rejected"
                    },
                    {
                        title: "Tracking",
                        icon: Route,
                        variant: "ghost",
                        href: "/tracking"
                    },
                    {
                        title: "Approved",
                        icon: BringToFront,
                        variant: "ghost",
                        href: "/approved"
                    },
                    {
                        title: "Scouts",
                        icon: Users,
                        variant: "ghost",
                        href: "/scouts"
                    },
                    {
                        title: "Analytics",
                        icon: ChartArea,
                        variant: "ghost",
                        href: "/analytics"
                    },
                    {
                        title: "Marketing",
                        icon: Mic,
                        variant: "ghost",
                        href: "/marketing"
                    },
                    {
                        title: "Education",
                        icon: GraduationCap,
                        variant: "ghost",
                        href: "/education"
                    },
                    {
                        title: "Transactions",
                        icon: ArrowLeftRight,
                        variant: "ghost",
                        href: "/transactions"
                    },
                    {
                        title: "Talent",
                        icon: Network,
                        variant: "ghost",
                        href: "/talent"
                    },
                    {
                        title: "Portfolio",
                        icon: FolderOpen,
                        variant: "ghost",
                        href: "/portfolio"
                    },
                ]}
            />
        </TooltipProvider>
    )
}

export default Sidebar