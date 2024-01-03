"use client";

import { SidebarItem } from "./sidebar-item";
import {routes} from './_const/routes'

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
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
    </div>
  );
};
