import NavLink from "../atoms/nav-link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-8 bg-[#FFF9EB] w-full">
      <span className="text-black text-xl font-bold">CreamRo</span>
      <div className="hidden md:block">
        <div className="flex gap-8 text-black text-xl font-bold">
          <NavLink href="/" label="Home" />
          <NavLink href="/about-us" label="About" />
          <NavLink href="/product" label="Product" />
          <NavLink href="/contact" label="Contact" />
        </div>
      </div>
      <div></div>
    </nav>
  );
}
