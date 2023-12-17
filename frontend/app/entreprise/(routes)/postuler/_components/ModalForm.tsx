"use client";
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
});


  
const ModalForm = () => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      place: "",
      duration: 0,
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

        const res = await axios.post("http://localhost:8080/api/offre", {
          title,
          place,
          duration,
          entreprise: {
            id: "6578003e79ca3766c33afbc4",
          },
        });

        if (res) {
          await toast.success("Offer added Successfully");
          setLoading(false);

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
                  onChange={(e) => setPlace(e.target.value)}required
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
                  placeholder="Enter your duration"
                  {...field}
                  onChange={(e) => setDuration(parseInt(e.target.value))}required
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
    );
};


export default ModalForm;
