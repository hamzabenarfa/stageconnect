"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "@/app/(dashboard)/_components/logo";
import { User2 } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Setting from "./Setting";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const { removeItem } = useLocalStorage("student");

  const handleLogout = () => {
    removeItem();
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-around p-4 flex-row relative z-10  bg-white/30  backdrop-blur-md ">
      <div className="flex flex-row gap-8">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center justify-center flex-row gap-2">
         
          <Link href="/internship">
            <Button variant="link">Internship </Button>
          </Link>
        </div>
      </div>

      <div className="hidden md:block md:space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User2
              className="bg-emerald-500/25 text-emerald-500 rounded-full p-1"
              size={32}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className=" cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Setting />
      </div>
    </div>
  );
};

export default Navbar;
