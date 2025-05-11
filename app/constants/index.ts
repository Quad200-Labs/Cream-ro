import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { TeamMemberType } from "../utils/interfaces";

export const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
];

export const quickLinks = [
  { href: "/knowledge-base", label: "Knowledge Base" },
  { href: "/hire-expert", label: "Hire an expert" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const ourServices = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const teamMembers: TeamMemberType[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Visionary leader with 10+ years in the industry.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "2",
    name: "David Chen",
    role: "CTO",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Tech innovator with a passion for scalable solutions.",
    socialLinks: [
      { type: "github", url: "https://github.com" },
      { type: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: "3",
    name: "Alex Morgan",
    role: "Lead Designer",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Creative mind bringing our brand vision to life.",
    socialLinks: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "website", url: "https://example.com" },
    ],
  },
  {
    id: "4",
    name: "Michael Williams",
    role: "Marketing Director",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Strategic marketer with a focus on growth.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "email", url: "mailto:example@example.com" },
    ],
  },
  {
    id: "5",
    name: "Emily Rodriguez",
    role: "Product Manager",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Focused on creating products that users love.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "github", url: "https://github.com" },
    ],
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Senior Developer",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Code craftsman with an eye for performance.",
    socialLinks: [
      { type: "github", url: "https://github.com" },
      { type: "website", url: "https://example.com" },
    ],
  },
  {
    id: "7",
    name: "Olivia Kim",
    role: "UX Researcher",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Passionate about creating intuitive user experiences.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "8",
    name: "Robert Davis",
    role: "Finance Manager",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    bio: "Ensuring our financial success and sustainability.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "email", url: "mailto:example@example.com" },
    ],
  },
];
