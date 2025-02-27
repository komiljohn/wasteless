import { z } from "zod";

export const ContactSchema = z.object({
  full_name: z.string().min(1, "required"),
  company_name: z.string().min(1, "required"),
  email: z.string().email("invalidEmail"),
  phone: z.string().min(1, "required"),
  message: z.string().min(1, "required"),
});

export type ContactFormType = z.infer<typeof ContactSchema>;
