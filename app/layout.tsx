import { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import Script from "next/script"

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
        <Script
          id="gtm"
          strategy="beforeInteractive"
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M46JM6T2');`}
        </Script>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M46JM6T2"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        <div className="flex size-full flex-col items-center justify-center tracking-widest">
          <div className="flex size-full max-w-7xl flex-col p-4">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
