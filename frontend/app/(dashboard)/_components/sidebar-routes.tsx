"use client";

import { SidebarItem } from "./sidebar-item";

import {routes} from './_const/routes'


export const SidebarRoutes = () => {
    

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) =>( 
                <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
};