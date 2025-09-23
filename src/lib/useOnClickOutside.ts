import { useEffect } from "react";

export function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  cb: () => void
) {
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!ref.current || !e.target) return;
      if (!ref.current.contains(e.target as Node)) cb();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [cb, ref]);
}
