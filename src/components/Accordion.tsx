import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div>
      <h1>Accordions</h1>
      <AccordionItem
        title="Hello"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        Text for child in here
      </AccordionItem>
      <AccordionItem
        title="John"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        Text for child in here
      </AccordionItem>
      <AccordionItem
        title="Jane"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        Text for child in here
      </AccordionItem>
    </div>
  );
}
