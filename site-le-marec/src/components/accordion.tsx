"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="group">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-slate-50"
            >
              <span className="font-semibold text-slate-900">{item.title}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-600">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm text-slate-700">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

