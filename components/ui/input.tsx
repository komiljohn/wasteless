import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-[66px] w-full min-w-0 rounded-[20px] border bg-transparent px-6 py-6 !text-[22px] leading-[27px] shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm placeholder:text-[22px] placeholder:leading-[27px] max-sm:h-12 max-sm:!text-[15px] !max-sm:leading-[18px] max-sm:rounded-[10px] max-sm:placeholder:text-[15px] max-sm:placeholder:leading-[18px] max-sm:py-[15px] max-sm:px-[15px]",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
