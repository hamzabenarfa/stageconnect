import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Award,
  Briefcase,
  Presentation,
  User2,
} from "lucide-react";
import Navbar from "@/components/navbar";

const Landing = () => {
  return (
    <section className="min-h-screen">
      <Navbar />

      <div className="flex flex-col justify-center items-center md:flex-row ">
        <div className=" px-8 md:w-2/4">
          <h1 className="  text-7xl pb-1 font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            Explore different kinds
          </h1>
          <h1 className="  text-5xl font-bold text-slate-700">
            of internships
          </h1>

          <div className="mt-4">
            <p className="text-sm font-medium">
              Are you ready to kick-start your career journey? Explore different
              kinds of internships to gain invaluable hands-on experience in
              your field of interest. From traditional summer internships to
              remote opportunities and everything in between, there&apos;s a
              world of possibilities waiting for you. Discover the diverse
              landscape of internships and find the perfect match to shape your
              future.
            </p>
          </div>
          {/* <Input
            type="search"
            className="border-2 border-blue-200 rounded-2xl h-12 mt-6"
            placeholder="Type here to search by internship title ,keyword ect..."
          /> */}
        </div>

        <Image src="/hero.avif" width={500} height={500} alt="Logo" />
      </div>

      <div className="hidden md:flex flex-row items-center justify-center gap-10 mt-4">
        <div className="flex items-center flex-col ">
          <User2 size={80} />
          <h1 className=" text-3xl capitalize">internship</h1>
        </div>
        <ArrowRight size={50} className="text-blue-400" />
        <div className="flex items-center  flex-col">
          <Presentation size={80} />
          <h1 className="text-center text-3xl capitalize">Training</h1>
        </div>
        <ArrowRight size={50} className="text-blue-400" />
        <div className="flex items-center justify-center flex-col">
          <Award size={80} />
          <h1 className=" text-center text-3xl capitalize">experience</h1>
        </div>
        <ArrowRight size={50} className="text-blue-400" />
        <div className="flex items-center  flex-col">
          <Briefcase size={80} />
          <h1 className="text-3xl capitalize">job </h1>
        </div>
      </div>
    </section>
  );
};

export default Landing;
