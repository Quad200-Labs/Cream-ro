import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Product, TeamMemberType } from "../utils/interfaces";

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
    image: "/images/vanilla.jpg",
    backgroundColor: "#F5E1B9", // soft vanilla beige
    category: "Classic",
  },
  {
    id: "chocolate",
    name: "Chocolate",
    description:
      "Decadent and smooth chocolate crafted from premium cocoa for a deep, satisfying taste.",
    image: "/images/chocolate.jpg",
    backgroundColor: "#D8BBA0", // cocoa brown with a creamy undertone
    category: "Premium",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    description:
      "Bursting with the flavor of ripe strawberries, blended into a smooth and refreshing delight.",
    image: "/images/strawberry.jpg",
    backgroundColor: "#FFE4EC", // soft strawberry pink
    category: "Classic",
  },
  {
    id: "fruit-nut",
    name: "Fruit & Nut",
    description:
      "A delightful mix of dried fruits and crunchy nuts, perfectly balanced in a creamy base.",
    image: "/images/fruit-nut.jpg",
    backgroundColor: "#E6F8E0", // soft light green
    category: "Specialty",
  },
];

export const productFilters = ["All Products", "Cones", "Tubs", "Popsicles", "Cups"];

export const productData: Record<string, { title: string; description: string }[]> = {
  "All Products": [
    {
      title: "Tubs",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "Cones",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "Popsicles",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "Cups",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
  ],
  Tubs: [
    {
      title: "200ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "320ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "500ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "1000ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "2000ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
  ],
  Cones: [
    {
      title: "40ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "80ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
  ],
  Popsicles: [
    {
      title: "Orange",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "Mango",
      description:
        "TA delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "Strawberry",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "Chocobar",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
  ],
  Cups: [
    {
      title: "80ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
    },
    {
      title: "100ml",
      description:
        "A delightful way to enjoy your favorite flavors on the go! Our ice cream cups offer the perfect portion of creamy goodness, making them an ideal choice for quick refreshment. Whether you’re at work, on a picnic, or just relaxing, these convenient cups bring you the joy of CreamRo in every spoonful",
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

export const products: Product[] = [
  {
    id: "1",
    name: "Vanilla Bean Dream",
    description:
      "Rich and creamy vanilla ice cream made with premium Madagascar vanilla beans, creating a classic flavor that's anything but ordinary.",
    image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
    price: 4.99,
    category: "Classic",
  },
  {
    id: "2",
    name: "Chocolate Fudge Bliss",
    description:
      "Decadent chocolate ice cream swirled with ribbons of rich fudge, delivering an intensely satisfying chocolate experience.",
    image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
    price: 5.49,
    category: "Classic",
  },
  {
    id: "3",
    name: "Strawberry Fields",
    description:
      "Fresh strawberry ice cream made with real fruit, capturing the essence of sun-ripened berries in every scoop.",
    image: "https://images.pexels.com/photos/1352275/pexels-photo-1352275.jpeg",
    price: 5.29,
    category: "Fruit",
  },
  {
    id: "4",
    name: "Mint Chocolate Chip",
    description:
      "Cool mint ice cream studded with premium dark chocolate chips, creating a refreshing and indulgent treat.",
    image: "https://images.pexels.com/photos/1352276/pexels-photo-1352276.jpeg",
    price: 5.49,
    category: "Classic",
  },
  {
    id: "5",
    name: "Caramel Swirl",
    description:
      "Smooth vanilla ice cream with golden caramel ribbons throughout, offering the perfect balance of sweet and creamy.",
    image: "https://images.pexels.com/photos/1352277/pexels-photo-1352277.jpeg",
    price: 5.29,
    category: "Classic",
  },
  {
    id: "6",
    name: "Berry Medley",
    description:
      "A vibrant mix of raspberry, blueberry, and blackberry ice cream, delivering a burst of fresh berry flavors.",
    image: "https://images.pexels.com/photos/1352279/pexels-photo-1352279.jpeg",
    price: 5.99,
    category: "Fruit",
  },
];
