import { Button } from "@/components/ui/button";
import { Logo } from "@/app/(dashboard)/_components/logo";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 items-center justify-between md:px-24 flex md:flex-row md:items-center md:justify-around">
      <Link href="/"> <Logo /></Link>
      <div className="hidden md:flex items-center justify-center flex-row gap-2">
        <Button variant="ghost">Home</Button>
        <Link href="/internship"><Button variant="ghost">Internship </Button></Link>  
        <Button variant="ghost">Events </Button>
        <Button variant="ghost">Training </Button>
        <Button variant="ghost">About </Button>
        <Button variant="ghost">Contact</Button>
      </div>
      <div className="hidden md:block">
      <Link href="/login"> <Button variant="hero">Login</Button></Link> 
        <Button variant="hero">Sign Up</Button>
      </div>

      <Menu size={30} className="md:hidden text-gray-600" />
    </div>
  );
};

export default Navbar;
