import Navbar from "@/components/navbar";
import Filter from "./_components/filter";
import Picks from "./_components/picks";
const Internship = () => {
  return (
    <div>
    <Navbar />

    <section className="flex flex-col min-h-screen">
      
        {/* <Filter /> */}
      
        <Picks />
      
    </section>
  </div>
  );
};

export default Internship;
