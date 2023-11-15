import Footer from "./_component/footer";
import Landing from "./_component/landing";
import Picks from "./_component/picks";

const Main = () => {
  return (
    <div className="overflow-hidden ">
      <Landing />
      <Picks />
      <Footer />
    </div>
  );
};

export default Main;
