import { SidebarItem } from "./sidebar-item";
import { LogOutIcon, User } from "lucide-react";
import { routes } from "./routes";

const SideBar = () => {
  return (
    <div className="flex flex-row md:flex-col md:justify-around items-center my-2 md:w-32 p-2  ">
      <div  className="">
        <div>
          <User className="w-14 h-14 bg-[#F4976C] text-white p-2 rounded-full" />
        </div>
        <p className="text-white">Hamza</p>
        <p className="text-white">Vermeg</p>
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
      <LogOutIcon className=" w-12 h-12 cursor-pointer hover:bg-[#F4976C] text-white p-2 rounded-xl" />
    </div>
  );
};

export default SideBar;
