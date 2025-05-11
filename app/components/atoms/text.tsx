import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return <p className={`text-base text-black ${className}`}>{children}</p>;
}
