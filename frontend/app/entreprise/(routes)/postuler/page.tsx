

import { PlusCircle } from "lucide-react";
import Card from "./_components/card";

const Postuler = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Card />
      <Card />
      <Card />
      
      <PlusCircle className="fixed bottom-10 right-14 w-14 h-14 hover:text-orange-400 cursor-pointer text-black p-2 rounded-full" />
    </div>
  );
};

export default Postuler;
