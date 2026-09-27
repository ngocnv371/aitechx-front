"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

/** Types and deletes through a list of words, with a blinking caret. */
export function Typewriter({
  words,
  className,
  typeSpeed = 62,
  deleteSpeed = 28,
  holdTime = 1500,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion || words.length === 0) return;

    const current = words[wordIndex % words.length] ?? "";

    if (!deleting) {
      if (text.length < current.length) {
        const id = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeSpeed,
        );
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(id);
    }

    if (text.length > 0) {
      const id = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deleteSpeed,
      );
      return () => clearTimeout(id);
    }

    setDeleting(false);
    setWordIndex((index) => (index + 1) % words.length);
    return;
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    holdTime,
    reduceMotion,
  ]);

  const display = reduceMotion ? (words[0] ?? "") : text;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{display}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.06em] animate-blink bg-neon-400"
      />
    </span>
  );
}
