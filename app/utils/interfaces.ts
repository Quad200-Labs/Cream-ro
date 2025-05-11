import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface LogoProps {
  className?: string;
}

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SocialLink {
  type: "github" | "linkedin" | "twitter" | "email" | "website";
  url: string;
}

export interface TeamMemberType {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socialLinks?: SocialLink[];
}
