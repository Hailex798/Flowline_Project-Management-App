import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
      <Link href="/" className="text-5xl font-extrabold w-full pt-72 grid place-items-center min-h-0">
        <Frown className="size-32 mb-5 hover:text-[#b641ff] transition-colors duration-300" />
        <h1>404 | Page Not Found</h1>
      </Link>
  );
}
