import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { imgArticle } from "../app/utils/posts";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Eye, MessageCircle } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="flex flex-col justify-between w-full h-full p-4 border-2 rounded-xl">
        <CardHeader className="p-2 pt-1">
          <div className="relative aspect-square">
            <Image
              src={imgArticle}
              width={500}
              height={500}
              className="object-cover transition-all duration-300 rounded-lg aspect-square hover:scale-110"
              alt={post.title}
            />
          </div>
        </CardHeader>
        <p className="mt-3 text-lg font-semibold">{post.title}</p>
        <CardContent>
          <Badge variant="outline"> {post.category}</Badge>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <MessageCircle size={20} className="text-slate-500" />
              <p className="text-slate-500">{post.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={20} className="text-slate-500" />
              <p className="text-slate-500">{post.nbViews}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
