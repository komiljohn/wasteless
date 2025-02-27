import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormTextInput from "@/components/ui/form/form-text-input";

import { ContactFormType, ContactSchema } from "./schema";

export default function ContactUs() {
  const t = useTranslations();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      company_name: "",
      email: "",
      full_name: "",
      message: "",
      phone: "",
    },
  });

  const onSubmit = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      form.reset({});
    }, 2000);
  };

  return (
    <section className="container mx-auto px-4 mb-[94px]">
      <div className="px-[58px] py-10 rounded-[20px] bg-primary">
        <p className="font-days-one mb-3 text-[40px] leading-[51px] text-center text-white">
          {t("contactWithUs")}
        </p>
        <p className="mb-7 text-xl text-white text-center">
          {t("contactWithUsSub")}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 mb-6">
              <FormTextInput placeholder="full_name" name="full_name" />
              <FormTextInput placeholder="company_name" name="company_name" />
              <FormTextInput placeholder="email" name="email" />
              <FormTextInput placeholder="phone" name="phone" />
              <FormTextInput
                placeholder="message"
                name="message"
                className="col-span-2"
                isMultiLine
              />
            </div>
            <div className="text-center">
              <Button
                isLoading={isPending}
                className="font-days-one bg-white text-foreground text-2xl h-[66px] leading-[31px] w-[370px] py-[16px] rounded-full hover:bg-white mx-auto"
              >
                Yuborish
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
