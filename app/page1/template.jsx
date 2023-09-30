"use client";
import Link from "next/link";
import { useEffect } from "react";
export default function Template({ children }) {
  useEffect(() => {
    console.log("layout mounted");
  }, []);
  return (
    <section
      className="w-full h-32 items-center justify-between 
      p-4 flex list-none first-letter first-letter
       bg-gradient-to-tl from-cyan-500 to-gray-950 bg-slate-600 "
    >
      <div
        className=" gap-6 items-center justify-center h-16 cursor-pointer
       font-nunito text-white font-bold  flex"
      >
        <Link href="/page1/inner">
          <li className="navlink">innerworld</li>
        </Link>

        <Link href="../page1">
          <li className="navlink">page1</li>
        </Link>
      </div>

      {children}
    </section>
  );
}
