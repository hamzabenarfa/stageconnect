'use client'
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import Notif from "./notif";

export const NavbarRoutes = () => {
    const router = useRouter();
    const logout = () => {
        router.push('/');
    }

    return (
        <div className="flex items-center justify-center gap-x-4 ml-auto">
          
                <Notif  /> 
            <Button type="button" onClick={logout}>Logout</Button>
        </div>
    );
};
