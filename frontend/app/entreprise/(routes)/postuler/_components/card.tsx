import { Button } from "@/components/ui/button";
import { Cherry } from "lucide-react";
import Image from "next/image";
const Card = () => {
  return (
    <div
      className="flex flex-row justify-between  items-center h-full px-5 py-4 bg-white
                    w-full md:w-[40%] rounded-3xl "
    >
      <div className="flex gap-2 ">
        <div className="flex items-center justify-center w-16 bg-[#cbf5a9] p-2 rounded-2xl">
          {/* <Image src="/facebook.png" width="50" height="50" alt="google" /> */}
          <Cherry className="w-6 h-6" />
        </div>
        <div>
          <p className="font-bold">Stage Pfe</p>
          <p className="text-sm">Beja</p>
          <p className="text-sm ">4 mois</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Button variant="secondary">Modify</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
};

export default Card;
