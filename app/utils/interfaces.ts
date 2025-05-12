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

export interface FlavorCardProps {
  flavor: Flavor;
  index: number;
  onHover: (isHovered: boolean) => void;
}


export interface InfoCardProps {
  title: string;
  description: string;
}

export interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundColor: string;
  category: string;
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

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category?: string;
}

export interface ConeTubImageProps {
  coneLabel?: string;
  tubLabel?: string;
}