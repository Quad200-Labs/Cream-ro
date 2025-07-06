import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import type { IconType } from "react-icons";
import { Product, TeamMemberType } from "../utils/interfaces";

type ContactItemData = {
  title: string;
  content: string;
  Icon: IconType;
};

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
  { href: "/pages/contact-us", label: "Contact" },
];

export const ourServices = [
  { href: "/", label: "Home" },
  { href: "/pages/about-us", label: "About Us" },
  { href: "/pages/products", label: "Products" },
  { href: "/pages/contact-us", label: "Contact" },
];

export interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundColor: string;
  category: string;
}

export const flavors: Flavor[] = [
  {
    id: "vanilla",
    name: "Vanilla",
    description:
      "A timeless classic made with rich, creamy vanilla and a touch of natural sweetness.",
    image: "/vanilla-cup.png",
    backgroundColor: "#F5E1B9", // soft vanilla beige
    category: "Classic",
  },
  {
    id: "chocolate",
    name: "Chocolate",
    description:
      "Decadent and smooth chocolate crafted from premium cocoa for a deep, satisfying taste.",
    image: "/chocolate-cup.png",
    backgroundColor: "#D8BBA0", // cocoa brown with a creamy undertone
    category: "Premium",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    description:
      "Bursting with the flavor of ripe strawberries, blended into a smooth and refreshing delight.",
    image: "/strawberry-cup.png",
    backgroundColor: "#FFE4EC", // soft strawberry pink
    category: "Classic",
  },
  {
    id: "fruit-nut",
    name: "Fruit & Nut",
    description:
      "A delightful mix of dried fruits and crunchy nuts, perfectly balanced in a creamy base.",
    image: "/fruit-nut-cup.png",
    backgroundColor: "#E6F8E0", // soft light green
    category: "Specialty",
  },
];

export const productFilters = [
  "All Products",
  "Cones",
  "Tubs",
  "Popsicles",
  "Cups",
];

export const productData: Record<string, Product[]> = {
  "All Products": [
    {
      id: "tubs",
      title: "Tubs",
      image: "/vanila-tub.svg",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      id: "cones",
      title: "Cones",
      image: "/vanilla-cone.svg",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      id: "popsicles",
      title: "Popsicles",
      image: "/mango-popsicle.svg",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      id: "cups",
      title: "Cups",
      image: "/strawberry-tub.svg",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
  ],
  Tubs: [
    {
      id: "tub-200ml",
      title: "200ml Tub",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 250,
      image: "/vanila-tub.svg",
      rating: 4.5,
      sizes: ["200ml"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "tub-320ml",
      title: "320ml Tub",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 320,
      image: "/banana-tub.svg",
      rating: 4.6,
      sizes: ["320ml"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "tub-500ml",
      title: "500ml Tub",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 480,
      image: "/strawberry-tub.svg",
      rating: 4.8,
      sizes: ["500ml"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "tub-1000ml",
      title: "1000ml Tub",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 900,
      image: "/vanilla-two-tub.svg",
      rating: 1.9,
      sizes: ["1L"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "tub-2000ml",
      title: "2000ml Tub",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 1650,
      image: "/fruit-and-nut-tub.svg",
      rating: 5.0,
      sizes: ["2L"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
  ],
  Cones: [
    {
      id: "cone-40ml",
      title: "40ml Cone",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 120,
      image: "/chocolate-cone.svg",
      rating: 4.3,
      sizes: ["40ml"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "cone-80ml",
      title: "80ml Cone",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 180,
      image: "/vanilla-cone.svg",
      rating: 4.4,
      sizes: ["80ml"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
  ],
  Popsicles: [
    {
      id: "popsicle-orange",
      title: "Orange Popsicle",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 100,
      image: "/mango-popsicle.svg",
      rating: 4.2,
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "popsicle-mango",
      title: "Mango Popsicle",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 100,
      image: "/chocolate-popsicle.svg",
      rating: 4.5,
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "popsicle-strawberry",
      title: "Strawberry Popsicle",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 100,
      image: "/mango-popsicle.svg",
      rating: 4.4,
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "popsicle-chocobar",
      title: "Chocobar",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 150,
      image: "/chocolate-popsicle.svg",
      rating: 4.7,
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
  ],
  Cups: [
    {
      id: "cup-80ml",
      title: "80ml Cup",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 100,
      image: "/banana-tub.svg",
      rating: 4.2,
      sizes: ["80ml"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
    {
      id: "cup-100ml",
      title: "100ml Cup",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful.",
      price: 120,
      image: "/strawberry-tub.svg",
      rating: 4.3,
      sizes: ["100ml"],
      flavors: ["Vanilla", "Chocolate", "Strawberry", "Fruit & Nut"],
    },
  ],
};

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

export const contactData: ContactItemData[] = [
  {
    title: "Address",
    content: "6265 Brockport Spencerport Rd, Brockport NY 14420",
    Icon: FiMapPin,
  },
  {
    title: "Phone number",
    content: "+6856585036197",
    Icon: BsTelephone,
  },
  {
    title: "Email",
    content: "nathan_wood@yahoo.com",
    Icon: AiOutlineMail,
  },
  {
    title: "Opening hours",
    content: "24/7 hour service",
    Icon: HiOutlineCalendarDays,
  },
];
