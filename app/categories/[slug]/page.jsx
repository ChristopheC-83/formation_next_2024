import { POSTS } from "@/app/utils/posts";
import PageContainer from "@/components/PageContainer"
import PageTitle from "@/components/PageTitle";
import PostsLists from "@/components/Posts-Lists";

export default function LoginPage({params}) {
  const {slug} = params
  return (
    <PageContainer >
        <PageTitle title={slug.replace("-", " ")} />
        <PostsLists posts={POSTS}/>

    </PageContainer>
  );
}
