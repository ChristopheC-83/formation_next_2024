import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-between flex-grow p-24">
    <div className="z-10 w-full max-w-5xl font-mono text-sm text-center">
      <Button
        variant="secondary"
        size="lg"
        className="mx-auto text-2xl text-primary"
        onClick={() => router.push("/bikes")}
      >
        <Eye className="mr-4" />
        Santa Cruz
      </Button>
    </div>
  </main>
  );
}
