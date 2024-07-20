import Link from "next/link"
import Button from "./button"
import { MobileContact } from "@/utils/constants"

interface HeaderProps {
  title?: string
  href?: string
}

export default function Header({ title, href }: HeaderProps) {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between">
      <Link href={href ?? "/"}>
        <h1 className="text-lg font-bold">{title}</h1>
      </Link>
      <Link href={MobileContact}>
        <Button>Contact Me</Button>
      </Link>
    </header>
  )
}
