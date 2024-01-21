// posts/[slug]

import PageContainer from "@/components/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Eye, MessageCircle } from "lucide-react";

export default function SinglePost() {
  const POST = {
    id: 1,
    category: "React",
    title: "React State Management: Choosing the Right Solution",
    image: "/react-state-management.jpg",
    caption:
      "Explore different state management solutions in React and choose the one that fits your needs.",
    date: "2023-01-15",
    minutesToRead: 10,
    author: "John ReactDev",
    nbViews: 25,
    nbComments: 8,
    slug: "react-state-management-choosing-right-solution",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam fugiat, quas recusandae consectetur facere a in, impedit quo assumenda hic deleniti officia culpa iure natus error. Non maiores, eum quidem eveniet autem mollitia enim corrupti veritatis totam dicta consectetur ex fugiat numquam soluta, nemo cupiditate inventore officia vitae adipisci nam.",
  };
  return (
    <PageContainer>
      <div className="p-8">
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
                {POST.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 mb-4">
          <div className="gap-3 flexMid">
            <Avatar>
              <AvatarImage
                src="https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_pixar/astroshiba.jpg"
                width={80}
                height={80}
              />
              <AvatarFallback>{POST.author}</AvatarFallback>
            </Avatar>
            <div>
              <p>{POST.author}</p>
              <p className="text-sm text-slate-500">
                Posted on {new Date(POST.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <MessageCircle size={24} />
              <p>{POST.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={24} />
              <p>{POST.nbViews}</p>
            </div>
          </div>
        </div>
        <Separator />
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: POST.content || "" }}
        />
      </div>
    </PageContainer>
  );
}
