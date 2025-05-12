import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

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