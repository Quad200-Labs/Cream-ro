import Heading from "../atoms/heading";
import Text from "../atoms/text";
import "../../styles/font.css";
import { Button } from "../atoms/buttons";

export default function HeroTextBlock() {
  return (
    <div className="sm:max-w-2xl space-y-6 relative">
      <Heading className="text-3xl sm:text-6xl text-black w-full font-semibold qurova-font">
        Delight in the Rich and Finest Flavors of CreamRo
      </Heading>
      <div>
        <Text className="max-w-md text-black font-semibold">
          Experience the magic of CreamRo – where every scoop is a masterpiece
          of rich, creamy delight. Made from the finest ingredients, our
          handcrafted flavors are designed to satisfy your sweetest cravings.
        </Text>
      </div>
      <Button
        label="View more"
        className="bg-[#FFECD4] text-black hover:bg-[#FFF9EB] !font-bold mt-5 hover:border-2 hover:border-[#A68160] duration-300 border-2 border-[#FFECD4] hover:scale-95"
      />
    </div>
  );
}
