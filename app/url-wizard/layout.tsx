import { LayoutProps } from "@/types/common"
import { Poppins } from "next/font/google"
import Header from "@/components/header"
import { cn } from "@/utils/common"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function UrlWizardLayout({ children }: LayoutProps) {
  return (
    <main className={cn("h-full w-full", poppins.className)}>
      <Header title="URL Wizard" href="/url-wizard" />
      {children}
    </main>
  )
}
