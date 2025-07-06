import type { IconType } from "react-icons";

type ContactItemProps = {
  title: string;
  content: string;
  Icon: IconType;
};

export default function ContactItem({
  title,
  content,
  Icon,
}: ContactItemProps) {
  return (
    <div className="flex items-center sm:space-x-7 space-x-4 mb-8 text-black jekko-font">
      <div className="sm:w-20 sm:h-20 w-16 h-16 bg-[#a67c52] rounded-t-full rounded-bl-full flex items-center justify-center">
        <Icon className="text-white" size={24} />
      </div>
      <div className="flex flex-col space-y-3 max-w-[190px] sm:max-w-full words">
        <h3 className="sm:text-3xl text-xl font-semibold">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
