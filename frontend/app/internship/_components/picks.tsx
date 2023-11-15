import Offer from "./offer";
import { offers } from "./exemple";
import { Input } from "@/components/ui/input";

const Picks = () => {
  return (
    <section className="flex flex-col  items-center min-h-screen p-2">
      <div className="flex flex-col items-center w-[60%] justify-center mb-8">
      <Input
            type="search"
            className="border-2 border-blue-200 rounded-2xl h-12 mt-6"
            placeholder="Type here to search by internship title ,keyword ect..."
          />
      </div>
    
    {
        offers.map((item)=>(
            <Offer 
                key={item.title}
                img={item.img}
                company={item.company}
                title={item.title}
                duration={item.duration}
                place={item.place}
                paid={item.paid}
            />
        ))
    }
    
  
    </section>
  );
};

export default Picks;
