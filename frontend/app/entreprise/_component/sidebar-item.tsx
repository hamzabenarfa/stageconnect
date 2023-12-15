import { LucideIcon } from "lucide-react";

import Link from "next/link";

interface SidebarItemProps {
  icon: LucideIcon;
  title: string;
  lien: string;
}

export const SidebarItem = ({ icon: Icon, title, lien }: SidebarItemProps) => {
  return (
      <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#F4976C] p-2 rounded-xl">
        <Icon className="w-12 h-12 text-white p-2" />
        <Link href={lien}>
          <p className="text-white text-sm">{title}</p>
        </Link>
      </div>
  );
};
