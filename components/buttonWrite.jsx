"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ButtonWrite() {
  const router = useRouter();

  return (
      <Button
        variant="secondary"
        size="lg"
        className="text-lg min-w-fit text-primary"
        onClick={() => router.push("/write")}
      >
        Write a New Post
      </Button>
  );
}
