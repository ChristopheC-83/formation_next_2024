import Navbar from "./Navbar";
import ButtonWrite from "./buttonWrite";
import PageContainer from "./PageContainer";
import ProfileBtn from "./profile-btn";
import ResponsiveMenu from "./responsive-menu";
import ToggleTheme from "./toggle-theme";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 text-xl border-b-2">
      <PageContainer>
        <div className="flex justify-between align-items">
          <div className="flex items-center gap-2">
            <ResponsiveMenu className=""/>
            <Link href="/">
              <h1 className="pt-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
                Nextblog
              </h1>
            </Link>
          </div>
          <div className="flex justify-between">
            <Navbar />
            <ButtonWrite />
          </div>
          <div className="flex items-center justify-between gap-2">
            <ToggleTheme />
            <ProfileBtn />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
