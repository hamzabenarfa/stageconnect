import { LucideIcon } from "lucide-react";

import Link from "next/link";

interface SidebarItemProps {
  icon: LucideIcon;
  title: string;
  lien: string;
}

export const SidebarItem = ({ icon: Icon, title, lien }: SidebarItemProps) => {
  
  return (
    <Link
      href={lien}
      className="flex flex-col items-center justify-center cursor-pointer hover:text-[#F4976C] p-2 rounded-xl"
    >
      <Icon className="w-10 h-10 text-blackwhite p-2" />
      <p className="text-black text-sm">{title}</p>
    </Link>
  );
};
