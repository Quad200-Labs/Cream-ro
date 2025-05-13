import Heading from "../atoms/heading";
import Text from "../atoms/text";
import "../../styles/font.css";
import { Button } from "../atoms/buttons";

export default function HeroTextBlock({
  heading,
  paragraph,
  routePath,
  paragraphStyles,
  headingAlign = "text-left",
}: {
  heading: string;
  paragraph: string;
  routePath?: boolean;
  paragraphStyles?: string;
  headingAlign?: string;
}) {
  return (
    <div className="sm:max-w-2xl space-y-6 relative">
      <Heading
        className={`text-3xl sm:text-6xl text-black w-full font-semibold qurova-font ${headingAlign}`}
      >
        {heading}
      </Heading>
      <div>
        <Text
          className={`max-w-md ${paragraphStyles} text-black font-semibold`}
        >
          {paragraph}
        </Text>
      </div>
      {routePath && (
        <Button
          label="View more"
          className="bg-[#FFECD4] text-black hover:bg-[#FFF9EB] !font-bold mt-5 hover:border-2 hover:border-[#A68160] duration-300 border-2 border-[#FFECD4] hover:scale-95"
        />
      )}
    </div>
  );
}
