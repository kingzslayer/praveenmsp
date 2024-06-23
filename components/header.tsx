import Link from "next/link"
import Button from "./button"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown"

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
]

export default function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between">
      <Link href="/">
        <h1 className="text-2xl font-bold tracking-wide">Msp</h1>
      </Link>
      <div className="flex items-center gap-4 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <HiOutlineMenuAlt1 className="h-7 w-7" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            {links.map((link, i) => (
              <Link href={link.href} key={i}>
                <DropdownMenuItem>{link.label}</DropdownMenuItem>
              </Link>
            ))}
            <Link href="/contact">
              <DropdownMenuItem>Contact Me</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden items-center gap-4 md:flex">
        <ul className="flex gap-4">
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <p className="group relative mx-1 w-max">
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 right-0 h-0.5 w-0 bg-white transition-all group-hover:w-full"></span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </header>
  )
}
