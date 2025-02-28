import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserProfile from "@/components/UserProfile";
import { checkUser } from "@/lib/checkUser";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Header = async() => {
  await checkUser();

  return (
    <header id="header" className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/essentials/logo-png1.png"}
            alt="FlowLine Logo"
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Hailex798/Flowline_Project-Management-App"
            passHref
            target="_blank"
            rel="noreferrer"
            className="hidden XS:inline"
          >
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="!h-7 !w-7" />
            </Button>
          </Link>
          <Link href="/project/create">
            <Button variant="destructive" className="xs: px-[0.7rem]">
              <PenBox size={18} />
              <span className="hidden xs:inline">Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserProfile />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
