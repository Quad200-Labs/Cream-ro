import Button from "../atoms/button";
import Heading from "../atoms/heading";
import Text from "../atoms/text";


export default function HeroTextBlock() {
  return (
    <div className="max-w-xl space-y-6">
      <Heading>Delight in the Rich and Finest Flavors of CreamRo</Heading>
      <Text>
        Experience the magic of CreamRo – where every scoop is a masterpiece of
        rich, creamy delight. Made from the finest ingredients, our handcrafted
        flavors are designed to satisfy your sweetest cravings.
      </Text>
      <Button
        label="View more"
        className="bg-black text-white hover:bg-gray-800"
      />
    </div>
  );
}
