import { ReactNode } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export default function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <div className="border-b">
      <h3
        onClick={onToggle}
        className="cursor-pointer py-2 px-4 flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </h3>
      {isOpen && <p className="px-4 pb-2">{children}</p>}
    </div>
  );
}
