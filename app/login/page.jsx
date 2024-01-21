import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <PageContainer>
      <div className="p-10">
        <PageTitle title="Login or Register" />
      </div>
      <div className="flex flex-col max-w-sm gap-4 mx-auto">
        <Button>
          <Github className="mr-3" />
          Signin with Github
        </Button>
        <Button>
          <Mail className="mr-3" />
          Signin with Google
        </Button>
      </div>
    </PageContainer>
  );
}
