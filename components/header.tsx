import Link from "next/link"
import Button from "./button"
import { MobileContact } from "@/utils/constants"

export default function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between">
      <div />
      <Link href={MobileContact}>
        <Button>Contact Me</Button>
      </Link>
    </header>
  )
}
