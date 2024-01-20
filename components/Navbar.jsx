"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/app/utils/categories";
import { AlignJustify, X } from "lucide-react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div x-data="{ isActive: false }" className="relative">
      <div className="inline-flex items-center mr-2 overflow-hidden bg-white rounded-md dark:bg-gray-800 hover:dark:bg-gray-900 dark:text-white">
        <Link
          href="#"
          className="px-4 py-2 text-lg font-semibold text-gray-600 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-100 hover:dark:bg-gray-900"
          onClick={() => toggleMenu()}
        >
          Categories
        </Link>

        <button
          onClick={() => toggleMenu()}
          className="h-full p-2 text-gray-600 dark:text-gray-100"
        >
          {!showMenu ? <AlignJustify /> : <X />}
        </button>
      </div>
      {showMenu && (
        <div
          className="absolute z-10 w-56 mt-2 bg-white border border-gray-100 rounded-md shadow-md start-0 dark:bg-gray-800 "
          // role="menu"
          // x-cloak
          // x-transition
          // x-show="isActive"
          // x-on:click.away="isActive = false"
          // x-on:keydown.escape.window="isActive = false"
        >
          <div className="flex flex-col p-2">
            {CATEGORIES.map((category) => (
              <Link
                href={`/categories/${category.slug}`}
                key={category.id}
                className="my-1 text-sm hover:dark:bg-gray-900 hover:bg-gray-100"
                onClick={() => toggleMenu()}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
