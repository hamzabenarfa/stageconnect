import Navbar from "@/components/navbar";
import Filter from "./_components/filter";
import Picks from "./_components/picks";
const Internship = () => {
  return (
    <div>
    <Navbar />

    <section className="flex flex-row min-h-screen">
      {/* <div className="w-[10%] ">
        <Filter />
      </div> */}
      <div className="flex-grow">
        <Picks />
      </div>
    </section>
  </div>
  );
};

export default Internship;
