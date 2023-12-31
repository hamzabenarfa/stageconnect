import { Button } from "@/components/ui/button";

export const ModeOfOperation = () => {
  return (
    <div className=" p-2 border-2 border-gray-200 rounded-lg">
      <h1 className="text-2xl text-center font-semibold text-gray-800 mb-10">
        Mode of operation
      </h1>
      <div className="flex  items-center justify-center gap-2">
        <div className="flex flex-col gap-2">
        <Button type="button" variant="outline" size="box">
          <div className="flex flex-col items-center justify-center">
            <p>Lux Mode</p>
            <p>24</p>
          </div>
        </Button>
        <Button type="button" variant="outline" size="box">
          <div className="flex  flex-col items-center justify-center">
            <p>Lux Mode</p>
            <p>14</p>
          </div>
        </Button>
        </div>
        <div className="flex flex-col gap-2">
        <Button type="button" variant="outline" size="box">
          <div className="flex flex-col  items-center justify-center">
            <p>Astonomicam Mode</p>
            <p>0</p>
          </div>
        </Button>
        <Button type="button" variant="outline" size="box">
          <div className="flex flex-col  items-center justify-center">
            <p>Calander Mode</p>
            <p>0</p>
          </div>
        </Button>
        </div>
        <div className="flex flex-col gap-2">
        <Button type="button" variant="outline" size="box">
          <div className="flex flex-col  items-center justify-center">
            <p>Manual Mode</p>
            <p>0</p>
          </div>
        </Button>

        <Button type="button" variant="outline" size="box">
          <div className="flex flex-col  items-center justify-center">
            <p>Factory Mode</p>
            <p>6</p>
          </div>
        </Button>
        </div>
      </div>
    </div>
  );
};
