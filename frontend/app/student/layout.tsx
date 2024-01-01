import Landing from "./_component/Landing";
import Navbar from "./_component/Navbar";
import Sidebar from "./_component/sidebar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Navbar />
      <Landing />
      <div className="z-20 absolute top-80  w-full ">
        <div className="flex w-full p-4 h-full">
          <div className="w-60 h-[55vh] rounded-xl"><Sidebar /></div>
          <div className="ml-2">{children}</div>
        </div>
      </div>
    </main>
  );
}
