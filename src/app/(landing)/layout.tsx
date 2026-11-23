import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import WhatsAppButton from "@/components/layouts/whatsapp-button";

export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="fixed inset-x-0 top-3 z-40 mx-auto w-[94%] max-w-6xl">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/25 bg-gradient-to-br from-white/[0.16] to-white/[0.04] px-5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55),0_18px_40px_-14px_rgba(0,0,0,0.55)] backdrop-blur-[10px]">
          <Link href="/" className="flex items-center gap-2 font-poppins text-xl font-extrabold tracking-tight text-heading">
            <Image src="/images/icon.png" alt="" width={36} height={36} priority className="h-8 w-8 rounded-lg" />
            <span>
              SAFZ<span className="bg-gradient-to-br from-[#FFD84A] to-[#F4A900] bg-clip-text text-transparent">TECH</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <a href="tel:+14252170763" className="hidden items-center gap-2 text-sm font-medium text-white sm:flex">
              <Phone className="h-4 w-4 text-primary" />
              +1 425-217-0763
            </a>
            <Link
              href="#apply"
              className="whitespace-nowrap rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.45)] to-[rgba(255,140,0,0.18)] px-5 py-2 text-sm font-semibold text-white"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/10 py-8">
        <div className="layout-standard flex flex-col items-center justify-between gap-3 text-sm text-paragraph sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SAFZTECH. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-primary">Terms</Link>
            <a href="mailto:info@safztech.com" className="hover:text-primary">info@safztech.com</a>
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </>
  );
}
