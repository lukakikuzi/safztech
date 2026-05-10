import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import WhatsAppButton from "@/components/layouts/whatsapp-button";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
