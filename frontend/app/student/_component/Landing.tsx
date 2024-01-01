import Sidebar from "./sidebar";
/* eslint-disable @next/next/no-img-element */

const Landing = () => {
    return ( <div className="">
    <div className="absolute top-0 z-0 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 w-full h-60"></div>

    <section className="relative top-28  left-10 z-10 flex flex-col items-start justify-center gap-4">
      <div className="flex flex-row items-center justify-between gap-10 ">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white rounded-full p-2 border-1 shadow-lg">
            <img
              src="./avatar.png"
              alt="profile"
              className="w-20 h-20 rounded-full "
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-sm text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </section>


   

  </div> );
}
 
export default Landing;