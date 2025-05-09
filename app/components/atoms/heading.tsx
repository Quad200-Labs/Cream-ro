import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return <h1 className={`${className}`}>{children}</h1>;
}

