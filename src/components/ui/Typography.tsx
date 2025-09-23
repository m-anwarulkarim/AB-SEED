// src/components/UI/Typography.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "h1" | "h2" | "h3" | "h4" | "body" | "small";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
  children: React.ReactNode;
}

export function Typography({
  variant = "body",
  children,
  className,
  ...props
}: TypographyProps) {
  const baseStyles: Record<Variant, string> = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    body: "leading-7",
    small: "text-sm text-muted-foreground",
  };

  return (
    <p className={cn(baseStyles[variant], className)} {...props}>
      {children}
    </p>
  );
}
