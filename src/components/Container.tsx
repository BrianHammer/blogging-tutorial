import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    // cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)
    <div className={cn("mx-auto container px-2.5 md:px-20", className)}>
      {children}
    </div>
  );
};

export default Container;