"use client";

import PageContainer from "@/components/pageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "./utils/categories";
import Link from "next/link";
import PostsLists from "@/components/Posts-Lists";
import { POSTS } from "./utils/posts";

export default function Home() {
  return (
    <PageContainer>
      <div className="px-8 py-4">
        <div
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="max-w-xs p-4 rounded sm:max-w-xl bg-slate-600/80 dark:bg-slate-400/80 ">
              <h1 className="text-3xl font-bold text-center text-white rounded sm:text-5xl dark:text-black">
                Become a Better Next Developper
              </h1>
              <Input
                type="email"
                placeholder="Email"
                className="mt-4 text-lg text-white duration-300 border-none outline-none bg-slate-900 dark:bg-white dark:text-black trasition"
              />
              <Button
                size="lg"
                className="w-full mt-4 text-xl duration-300 trasition "
              >
                Subscribe to our NewsLetter
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 m-6 ">
          {CATEGORIES.map((category) => (
            <div key={category.id}>
              <Link
                href={`/categories/${category.slug}`}
                className="my-1 text-sm hover:dark:bg-gray-900 hover:bg-gray-100"
              >
                <Button variant="outline">{category.name}</Button>
              </Link>
            </div>
          ))}
        </div>

        <PostsLists posts={POSTS}/>
      </div>
    </PageContainer>
  );
}
