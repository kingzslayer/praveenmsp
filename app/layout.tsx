import MainNav from "@/components/header"
import { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"

import "@/styles/globals.css"
import { LayoutProps } from "@/types/common"
import Footer from "@/components/footer"

const josefin = Josefin_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Praveen Msp",
    template: "%s | Praveen Msp",
  },
  description: "Personal website of Praveen Msp.",
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={josefin.className}>
        <div className="flex size-full flex-col items-center justify-center">
          <div className="flex size-full max-w-7xl flex-col p-4">
            <MainNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
