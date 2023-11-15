import Navbar from "@/components/navbar";
import Filter from "./_components/filter";
import Picks from "./_components/picks";
const Internship = () => {
  return (
    <div>
      <Navbar />

      <section className=" flex flex-row  min-h-screen">
      {/* use fixed on top left ...  */}
          <Filter />
       
          <Picks />
      </section>
    </div>
  );
};

export default Internship;
