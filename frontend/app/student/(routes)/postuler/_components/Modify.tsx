"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Spinner } from "@/components/spinner";
const formSchema = z.object({
  title: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  place: z.string().min(8, {
    message: "place must be at least 8 characters.",
  }),
  duration: z.number().min(1, {
    message: "number must not be empty.",
  }),
  description: z.string().min(100, {
    message: "description must be at least 8 characters.",
  }),
});


import { DataItem } from "@/types/entreprise";
import { Textarea } from "@/components/ui/textarea";


const Modify = ({ id, title: initialTitle, place: initialPlace, duration: initialDuration ,description:initialDescription }: DataItem) => {
  const [title, setTitle] = useState(initialTitle);
  const [place, setPlace] = useState(initialPlace);
  const [duration, setDuration] = useState(initialDuration);
  const [description, setDescription] = useState(initialDescription);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      place: "",
      duration: 0,
      description:"",
    },
  });

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

        const res = await axios.put(`http://localhost:8080/api/offre/${id}`, {
          title,
          place,
          duration,
          description,
          entreprise: {
            id: "6578003e79ca3766c33afbc4",
          },
        });

        if (res) {
          await toast.success("Offer added Successfully");
          setLoading(false);
          setOpen(false)

        } else {
          setLoading(false);
          toast.error("Error adding offer");
        }
      }
     catch (e) {
      console.log(e);
    }
  };
    

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button variant="secondary">Modify</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modify offer</DialogTitle>
          <DialogDescription>
          Modify an offer of internship. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={(field) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your title"
                  {...field}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  value={title}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={(field) => (
            <FormItem>
              <FormLabel>Place</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your place"
                  {...field}
                  onChange={(e) => setPlace(e.target.value)}
                  required
                  value={place}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={(field) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input   
                  type="number"       
                  {...field}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  required
                  value={duration}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
         <FormField
          control={form.control}
          name="description"
          render={(field) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea   
                  {...field}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  value={description}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        {loading ? (
          <div className="text-5xl font-bold flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <Button type="submit" className="w-full">
            Submit
          </Button>
        )}
      </form>
    </Form>
        
      </DialogContent>
    </Dialog>
  );
};

export default Modify;
