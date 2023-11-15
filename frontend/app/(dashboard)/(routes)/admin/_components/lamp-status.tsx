import { Button } from "@/components/ui/button";
import { Lightbulb, LightbulbOff } from "lucide-react";
const LampStatus = () => {
  return (
    <div className="p-2 border-2 border-gray-200 rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800">Lamp Status</h1>
      <div className="flex flex-row justify-center gap-4">
        <Button type="button" variant="outline" size="lg">
          <Lightbulb size="32" />
          <p>0</p>
        </Button>
        <Button type="button" variant="outline" size="lg" className="">
          <LightbulbOff size="32" />
          <p>24</p>
        </Button>
      </div>
    </div>
  );
};

export default LampStatus;
