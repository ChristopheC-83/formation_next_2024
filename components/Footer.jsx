import { CATEGORIES } from "@/app/utils/categories";
import PageContainer from "./pageContainer";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="p-4 border-t">
      <PageContainer>
        <div className="flex flex-col items-center md:justify-around md:flex-row">
          <h3 className="w-full pt-1 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
            Nextblog
          </h3>

          <div className="flex flex-col w-full gap-2 flex-start md:flex-row ">
            {CATEGORIES.map((category) => (
              <div key={category.id}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="my-1 text-sm hover:dark:bg-gray-900 hover:bg-gray-100"
                >
                  <Button variant="ghost">{category.name}</Button>
                </Link>
              </div>
            ))}

            <div className="flex w-full flex-start">
                <Button variant="ghost" >
                  <Link href="/write">Write</Link>
                </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
