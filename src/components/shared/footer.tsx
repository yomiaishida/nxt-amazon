import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/contants";

export default function Footer() {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button variant="ghost" className="bg-gray-800 w-full rounded-none">
          <ChevronUp className="nr-2 h-4 w-4" />
          Back to top
        </Button>
      </div>

      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/contions-of-use">Conditions of use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>

        <div className="flex justify-center text-sm">
          <p>@2000-2004, {APP_NAME}, Inc. or it affiliates</p>
        </div>

        <div className="mt-8 flex justify-center text-sm text-gray-400">
          123, Main Street, MA, UK
        </div>
      </div>
    </footer>
  );
}
