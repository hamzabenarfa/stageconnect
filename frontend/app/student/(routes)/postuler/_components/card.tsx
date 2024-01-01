"use client";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Cherry } from "lucide-react";
import Toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Modify from "./Modify";

import { DataItem } from "@/types/entreprise";


const Card = ({ id, title, place, duration,description }: DataItem) => {
  const [open, setOpen] = useState(false);
  const deleteOffer = async (offerId: string) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/offre/${offerId}`
      );
      if (res) {
        Toast.success("Offer deleted Successfully");
        setOpen(false);
      }
    } catch (error) {
      Toast.error("Error");
    }
  };

  return (
    <div
      className="flex flex-col h-full px-5 py-4 bg-white
                    w-full xl:w-[60%] 2xl:w-[40%]  rounded-3xl "
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-2 ">
          <div className="flex items-center justify-center w-16 bg-[#cbf5a9] p-2 rounded-2xl">
            {/* <Image src="/facebook.png" width="50" height="50" alt="google" /> */}
            <Cherry className="w-6 h-6" />
          </div>
          <div className="px-2">
            <p className="font-bold capitalize">{title}</p>
            <p className="text-sm capitalize">{place}</p>
            <p className="text-sm ">{duration}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Modify id={id} title={title} place={place} duration={duration} description={description} entrepriseId={""} studentIds={[]} />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Delete offer</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this offer?
                </DialogDescription>
              </DialogHeader>
              <Button variant="warning" onClick={() => deleteOffer(id)}>
                Yes
              </Button>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                No
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mx-20 pr-2 h-full text-justify break-words  ">
         <p className="text-sm text-gray-500">{description && description.substring(0,100)}</p> 
      </div>
    </div>
  );
};

export default Card;
