"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";

const FormSchema = z.object({
  city: z.string({
    required_error: "Please select an city to display.",
  }),
  zone: z.string({
    required_error: "Please select an zone to display.",
  }),
  sector: z.string({
    required_error: "Please select an sector to display.",
  }),
  lane: z.string({
    required_error: "Please select an lane to display.",
  }),
});

export function Location() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit() {
    return;
  }

  return (
    <div className="">
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-4 flex items-center flex-col md:flex-row gap-4"
      >

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>City</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
       
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Zone</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a zone" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
            
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sector"
          render={({ field }) => (
            <FormItem  className="w-full">
              <FormLabel>Sector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a sector" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
            
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lane"
          render={({ field }) => (
            <FormItem  className="w-full ">
              <FormLabel className="">Lane</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lane" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
           
              <FormMessage />
            </FormItem>
          )}
        />


      <Button type="submit" className="self-end">Apply</Button>
      </form>
    </Form>

          
    </div>
  );
}
