import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { CATEGORIES } from "@/app/utils/categories";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,SheetClose
} from "@/components/ui/sheet"

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6 md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
          <Link href="write">
            <SheetClose asChild>
              <Button variant="ghost">Write a New Post</Button>
            </SheetClose>
          </Link>
          <h3 className="mt-2 mb-1 underline">Categories</h3>
          {CATEGORIES.map((category) => (
            <SheetClose asChild key={category.id}>
              <Link
                href={`/categories/${category.slug}`}
                key={category.id}
                className="my-1 ml-2 text-lg"
              >
                <Button variant="ghost"> {category.name}</Button>
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
