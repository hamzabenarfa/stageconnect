import Offer from "./offer";
import { offers } from "../_const/exemple";
const Picks = () => {
  return (
    <section className="flex flex-col  items-center min-h-screen p-2">
      <div className="flex flex-col items-center justify-center space-y-2 mb-8">
        <h1 className="  text-5xl pb-1 font-bold bg-gradient-to-r from-emerald-500 to-sky-500 text-transparent bg-clip-text">
          Not sure the best fit for you?
        </h1>
        <h1 className="  text-3xl font-bold text-slate-700">
          here are some of our top picks
        </h1>
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
