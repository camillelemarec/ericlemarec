"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  definition?: string;
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
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-slate-50 md:px-5"
              aria-expanded={isOpen}
            >
              <span className="min-w-0 flex-1 font-semibold text-slate-900">{item.title}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-600">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="space-y-4 px-5 pb-5">
                {item.definition ? (
                  <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      Qu&apos;est-ce que c&apos;est&nbsp;?
                    </div>
                    <p className="mt-1 text-sm text-slate-700">
                      {item.definition}
                    </p>
                  </div>
                ) : null}
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Notre intervention
                  </div>
                  <p className="mt-1 text-sm text-slate-700">{item.content}</p>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

