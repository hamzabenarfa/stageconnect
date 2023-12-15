import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InternCardProps {
    background: string;
    Firsticon:LucideIcon;
    Secondicon:LucideIcon;
    title: string;
    number: number;

}

const InternCard = ({background,Firsticon,Secondicon,title,number}:InternCardProps) => {
  return (
    <div className={cn("flex flex-col justify-around items-start  h-72 w-full md:w-80 rounded-3xl p-8",
        background || 'bg-red-100'
    )}>
      <div className="space-x-3">
        <Button variant="icon" size="icon" className="rounded-full">
          <Firsticon className="w-10 h-10 text-white/90 p-2" />
        </Button>
        <Button variant="icon" size="icon" className="rounded-full">
          <Secondicon className="w-10 h-10 text-white/90 p-2" />
        </Button>
      </div>
      <div className="space-y-2">
        <p className="text-white">{title}</p>
        <h1 className="text-7xl font-bold text-white">{number}</h1>
      </div>
    </div>
  );
};

export default InternCard;
