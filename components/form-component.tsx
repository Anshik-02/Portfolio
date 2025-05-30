"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "./email-component";

const formSchema = z.object({
  Name: z.string().min(2).max(50),
  Email: z.string().email().min(4).max(50),
  Message: z.string().min(2).max(500), 
});

export default function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    sendEmail(e.target); 
    e.target.reset();   
    form.reset()
  }

  return (
    <div className="h-auto w-[410px] flex-col rounded-md mt-5 border flex items-center justify-center border-foreground/20">
      <p className="text-foreground/45 mt-6 leading-relaxed max-w-[280px]">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values, e) => onSubmit(values, e))}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-2 text-lg ">Name</FormLabel>
                <FormControl>
                  <Input className="w-70 border-foreground" placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input  className="w-70 border-foreground" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Message</FormLabel>
                <FormControl>
                  <Textarea className="w-70 border-foreground" placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-transparent text-foreground w-full mb-8 hover:bg-text-foreground/20" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
