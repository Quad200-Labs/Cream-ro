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