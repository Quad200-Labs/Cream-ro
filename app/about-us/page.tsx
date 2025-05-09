import Navbar from "../components/molecules/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="px-8 py-16 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About CreamRo</h1>
        <p className="text-lg leading-7 text-gray-700">
          At CreamRo, we believe in crafting joy one scoop at a time. With a
          commitment to the finest ingredients and a passion for flavor, our
          mission is to bring smiles through every bite of our handcrafted ice
          creams. Rooted in tradition and inspired by innovation, CreamRo is
          your go-to destination for indulgence.
        </p>
      </main>
    </>
  );
}
