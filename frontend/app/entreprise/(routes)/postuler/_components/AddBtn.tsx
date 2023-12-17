import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ModalForm from "./ModalForm";

const AddBtn = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <PlusCircle className="fixed bottom-10 right-10 w-14 h-14 hover:text-orange-400 cursor-pointer text-white p-2 rounded-full" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add offer</DialogTitle>
          <DialogDescription>
            Add an offer of internship. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <ModalForm />
        
      </DialogContent>
    </Dialog>
  );
};

export default AddBtn;
