"use client";

import { useEffect, useState } from "react";

export function useKeyboardShortcut(targetSequence: string, onMatch: () => void) {
  const [, setInputSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Guard against undefined key or non-printable keys
      if (!event.key || event.key.length !== 1) {
        return;
      }
      
      const key = event.key.toUpperCase();
      
      let matched = false;
      // Update the sequence of pressed keys
      setInputSequence((prev) => {
        const next = [...prev, key].slice(-targetSequence.length);
        if (next.join("") === targetSequence.toUpperCase()) {
          matched = true;
          return []; // Reset after match
        }
        return next;
      });

      if (matched) {
        onMatch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [targetSequence, onMatch]);
}
