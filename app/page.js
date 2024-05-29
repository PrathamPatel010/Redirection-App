import Image from "next/image";
import Link from "next/link";
import LinksPage from "@/app/components/LinksPage";
import {PasswordPage} from "@/app/components/PasswordPage";

export default function Home() {
  return (
    <main className="p-5 flex flex-col items-center">
      <PasswordPage/>
    </main>
  );
}
