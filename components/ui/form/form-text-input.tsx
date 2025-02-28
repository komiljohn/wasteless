import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  isMultiLine?: boolean;
}

export default function FormTextInput({
  name,
  isMultiLine,
  type,
  label,
  placeholder,
  className,
  ...props
}: Props) {
  const { control } = useFormContext();
  const t = useTranslations();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col items-start w-full", className)}>
          {label && (
            <FormLabel className="font-medium text-[#344054] dark:text-white">
              {t(label)}
            </FormLabel>
          )}
          <FormControl className="w-full">
            {isMultiLine ? (
              <textarea
                rows={4}
                placeholder={placeholder ? t(placeholder) : ""}
                className={cn(
                  "rounded-[20px] flex min-h-[80px] w-full border border-input bg-background px-6 py-6 text-[22px] leading-[27px] placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 resize-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] outline-none max-sm:text-[15px] max-sm:leading-[18px] max-sm:py-[15px] max-sm:px-[15px] max-sm:rounded-[10px]",
                  className,
                )}
                {...field}
                {...props}
              />
            ) : (
              <Input
                type={type ?? "text"}
                className="w-full bg-white"
                placeholder={placeholder ? t(placeholder) : ""}
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
                {...props}
              />
            )}
          </FormControl>
          <FormMessage className="text-lg text-red-700" />
        </FormItem>
      )}
    />
  );
}
