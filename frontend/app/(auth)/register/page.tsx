"use client";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import authService from "@/services/Auth.service";
import Toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

const Register = () => {
  const router = useRouter();
  const [selectedUserType, setSelectedUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(false);
  const [studentData, setStudentData] = useState(["", ""]);

  const [entrepriseData, setEntrepriseData] = useState(["", "", ""]);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setEntrepriseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeStudent = (e : { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedUserType(event.target.value);
  };

  const openForm = () => {
    setForm(true);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const role = selectedUserType === "student" ? "student" : "entreprise";

    if (role === "student") {
      const res = await authService.register(
        email,
        password,
        role,
        studentData
      );
      console.log("Response:", res);
      if (res) {
        router.push("/login");
        Toast.success("Login successful");
      } else {
        Toast.error("Wrong Credentials");
      }
    } else if (role === "entreprise") {
      try {
        const res = await authService.register(
          email,
          password,
          role,
          undefined,
          entrepriseData
        );
        console.log("Response:", res);
        if (res) {
          router.push("/login");
          Toast.success("Login successful");
        } else {
          Toast.error("Wrong Credentials");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-around overflow-hidden bg-gray-100 space-y-8 ">
      <Image
        src="/login.png"
        alt="Picture of the author"
        width={700}
        height={600}
        className="hidden md:block"
      />
      {!form && (
        <div className="shadow-md md:max-w-sm w-full mx-2 px-4 p-2 rounded-2xl h-[90vh] space-y-10 bg-white flex flex-col items-center justify-center ">
          <h1 className="text-2xl text-center font-bold">
            Join as a student or an enterprise
          </h1>
          <div className="flex flex-col space-y-4">
            <div
              onClick={() => setSelectedUserType("student")}
              className={`flex-1 h-full rounded-xl space-y-4 p-4 cursor-pointer ${
                selectedUserType === "student"
                  ? "bg-emerald-200 border-green-500 border-4"
                  : "border-gray-200 border-2"
              }`}
            >
              <div className="flex flex-row justify-between text-3xl">
                🧑‍🎓
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-green-500"
                  name="name"
                  value="student"
                  checked={selectedUserType === "student"}
                  onChange={handleRadioChange}
                />
              </div>
              <h1 className="text-xl font-bold">
                I&apos;m a student looking for an internship
              </h1>
            </div>

            <div
              onClick={() => setSelectedUserType("entreprise")}
              className={`flex-1 h-full md:pb-6 rounded-xl space-y-4 p-4 cursor-pointer ${
                selectedUserType === "entreprise"
                  ? "bg-emerald-200 border-green-500 border-4"
                  : "border-gray-200 border-2"
              }`}
            >
              <div className="flex flex-row justify-between text-3xl">
                💼
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-green-500"
                  name="name"
                  value="entreprise"
                  checked={selectedUserType === "entreprise"}
                  onChange={handleRadioChange}
                />
              </div>
              <h1 className="text-xl font-bold">
                I&apos;m a company looking for interns
              </h1>
            </div>
          </div>

          <Button onClick={openForm} disabled={selectedUserType===""} className="w-full" variant="success">
            Join as a {selectedUserType}
          </Button>
          <Link href="/login" className=" underline">
            You have acount ?
          </Link>
        </div>
      )}
      {form && (
        <form className="shadow-md md:max-w-sm w-full mx-2 px-4 p-2 rounded-2xl h-full space-y-6 py-6 bg-white flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl text-center font-bold">
            {selectedUserType === "student" ? "Student" : "Entreprise"}{" "}
            Registration
          </h1>

          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 border-2 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-300 border-2 p-2 rounded-md"
              required
            />

            {selectedUserType === "entreprise"  && (
              <>
                <div className="flex flex-col space-y-2 w-full">
                  <label htmlFor="nom">Nom:</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    onChange={handleChange}
                    className="border-gray-300 border-2 p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col space-y-2 w-full">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={handleChange}
                    className="border-gray-300 border-2 p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col space-y-2 w-full">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    className="border-gray-300 border-2 p-2 rounded-md"
                  />
                </div>
              </>
            )}

            {selectedUserType === "student" && (
              <>
                <div className="flex flex-col space-y-2 w-full">
                  <label htmlFor="nom">Nom:</label>
                  <input
                    type="text"
                    id="nom"
                    name="firstName"
                    onChange={handleChangeStudent}
                    className="border-gray-300 border-2 p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col space-y-2 w-full">
                  <label htmlFor="location">Last name:</label>
                  <input
                    type="text"
                    id="location"
                    name="lastName"
                    onChange={handleChangeStudent}
                    className="border-gray-300 border-2 p-2 rounded-md"
                  />
                </div>
              </>
            )}
          </div>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-full"
            size="lg"
            variant="success"
          >
            Register
          </Button>
          { selectedUserType !== "" && (
            <Button
              onClick={() => {setSelectedUserType("")
                   setForm(false)}}
              type="submit"
              className="w-full"
              size="lg"
              variant="warning"
            >
              <ArrowBigLeft /> back
            </Button>
          )}
        </form>
      )}
    </section>
  );
};

export default Register;
