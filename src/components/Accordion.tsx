import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          className={`accordion-icon${open ? ' open' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div className={`accordion-content${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="accordion-content-inner">{answer}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { id: number; question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map(item => (
        <AccordionItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
