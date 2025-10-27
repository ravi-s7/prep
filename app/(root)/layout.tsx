import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepNex</h2>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/interview"
            className="text-primary-100 hover:text-primary-200 transition-colors"
          >
            Interviews
          </Link>
          <Link
            href="/nexus"
            className="text-primary-100 hover:text-primary-200 transition-colors"
          >
            OmniLearn Nexus
          </Link>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
