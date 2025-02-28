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
    <section className="container mx-auto px-4 mb-[94px] max-sm:mb-10 max-sm:px-0">
      <div className="px-[58px] py-10 rounded-[20px] bg-primary max-sm:px-6 max-sm:rounded-none">
        <p className="font-days-one mb-3 text-[40px] leading-[51px] text-center text-white max-sm:text-xl max-sm:leading-[20px]">
          {t("contactWithUs")}
        </p>
        <p className="mb-7 text-xl text-white text-center max-sm:text-base">
          {t("contactWithUsSub")}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-5 gap-y-6 mb-6 max-sm:gap-y-3 max-sm:mb-[18px]">
              <FormTextInput placeholder="full_name" name="full_name" />
              <FormTextInput placeholder="company_name" name="company_name" />
              <FormTextInput placeholder="email" name="email" />
              <FormTextInput placeholder="phone" name="phone" />
              <FormTextInput
                placeholder="message"
                name="message"
                className="col-span-2 max-md:col-span-1"
                isMultiLine
              />
            </div>
            <div className="text-center">
              <Button
                isloading={isPending}
                className="font-days-one bg-white text-foreground text-2xl h-[66px] leading-[31px] w-[370px] py-[16px] rounded-full hover:bg-white mx-auto max-sm:text-base max-sm:leading-[20px] max-sm:h-12 max-sm:w-4/5"
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
