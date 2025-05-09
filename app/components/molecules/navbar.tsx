import NavLink from "../atoms/nav-link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <span className="font-bold text-lg">CreamRo</span>
      <div className="flex gap-4">
        <NavLink href="/" label="Home" />
        <NavLink href="/about-us" label="About" />
        <NavLink href="/product" label="Product" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </nav>
  );
}
