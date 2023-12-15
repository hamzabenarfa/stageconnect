import { SidebarItem } from "./sidebar-item";
import { LogOutIcon, Settings, User } from "lucide-react";
import { routes } from "../_const/routes";

const SideBar = () => {
  return (
    <div className="flex flex-row md:flex-col md:justify-between items-center my-2 md:w-32 p-2 py-6 bg-white rounded-3xl text-black">
      <div className="flex flex-col items-center justify-center gap-6">
        <div>
          <User className="w-12 h-12 bg-[#F4976C] text-black p-2 rounded-full" />
        </div>
      

      <div className="flex  md:flex-col md:space-y-2">
        {routes.map((route) => (
          <SidebarItem
            key={route.title}
            icon={route.icon}
            title={route.title}
            lien={route.lien}
          />
        ))}
      </div>
      </div>
      <div className="space-y-4">
        <Settings className=" w-10 h-10 cursor-pointer hover:text-[#F4976C] text-black p-2 rounded-xl" />
        <LogOutIcon className=" w-10 h-10 cursor-pointer hover:text-[#F4976C] text-black p-2 rounded-xl" />
      </div>
    </div>
  );
};

export default SideBar;
