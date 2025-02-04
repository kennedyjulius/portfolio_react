import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kennedy | Personal Porfolio",
  description: "Kennedy is a full stack developer with a 4 years experience in building Mobile Apps  and Web Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-grey-50 text-gray-950 relative h-[5000px]`}
      >
        <div className="bg-[#fbe2e3 absolute top-[-6rem] -z-10  right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]] "></div>
        <div className="bg-[#dbd7fb absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-36rem] lg:w-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]] "></div>
        
        {children}
      </body>
    </html>
  );
}
