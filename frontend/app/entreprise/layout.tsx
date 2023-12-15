import SideBar from "./_component/SideBar";

const EntrepriseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 min-h-screen bg-[#303C6C]">
      <SideBar />

      <main className=" bg-slate-700 w-full  md:my-10 md:mx-4  rounded-3xl  ">
        {children}
      </main>
    </div>
  );
};

export default EntrepriseLayout;
