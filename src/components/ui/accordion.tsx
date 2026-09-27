"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-ink-700/70", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-neon-300"
            >
              <span className="font-display text-base font-medium text-ink-50 sm:text-lg">
                {item.q}
              </span>
              <span
                className={cn(
                  "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-colors",
                  isOpen
                    ? "border-neon-400/60 bg-neon-400/10 text-neon-300"
                    : "border-ink-600 text-ink-300",
                )}
              >
                {isOpen ? (
                  <Minus className="size-3.5" />
                ) : (
                  <Plus className="size-3.5" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 pr-10 text-sm leading-relaxed text-ink-300 sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
