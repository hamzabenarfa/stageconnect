import Landing from "./_component/Landing";
import Navbar from "./_component/Navbar";


export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" ">
      <Navbar />
      <Landing />
      <div className="z-20 absolute top-80 bg-red-100 w-full ">

      {children}
      </div>
      
    </main>
  );
}
