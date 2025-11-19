"use client";

import Link from "next/link";
import { HoneyCombIcon } from "@/components/Landing/Desktop/header";

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="flex w-full items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <HoneyCombIcon />
          <div className="flex flex-col items-start leading-none">
            <span className="font-bold text-lg bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent tracking-tight">
              HoneyComb
            </span>
            <span className="text-xs font-medium text-black">AI</span>
          </div>
        </Link>
        <Link
          href="/support"
          className="text-sm font-medium text-black underline-offset-4 hover:underline"
        >
          Support
        </Link>
      </div>
    </header>
  );
}
