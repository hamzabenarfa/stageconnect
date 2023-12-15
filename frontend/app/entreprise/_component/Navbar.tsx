import { Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full rounded-3xl h-20 p-4  bg-white">
      <h1 className="lg:text-3xl font-semibold capitalize">hi hamza!</h1>

      <div className="flex items-center gap-1">
        <Search className="w-10 h-10 text-black p-2 rounded-full" />
        <Bell className="w-10 h-10 text-black p-2 rounded-full" />
        <Image
          src="/google.png"
          alt="user img"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex items-center ml-1">
          <p className="font-bold">Hamza Benarfa</p>
          <ChevronDown className="w-10 h-10 text-black p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
