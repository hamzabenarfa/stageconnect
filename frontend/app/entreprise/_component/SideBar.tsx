import { SidebarItem } from "./sidebar-item";
import { LogOutIcon, User } from "lucide-react";
import { routes } from "../_const/routes";

const SideBar = () => {
  return (
    <div className="flex flex-row md:flex-col md:justify-around items-center my-2 md:w-32 p-2 bg-white rounded-3xl text-black">
      <div  className="flex flex-col items-center justify-center gap-1">
        <div>
          <User className="w-10 h-10 bg-[#F4976C] text-black p-2 rounded-full" />
        </div>
        {/* <p className="text-white">Hamza</p> */}
        <p className="text-black font-semibold">Vermeg</p>
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
      <LogOutIcon className=" w-10 h-10 cursor-pointer hover:bg-[#F4976C] text-black p-2 rounded-xl" />
    </div>
  );
};

export default SideBar;
