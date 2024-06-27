import { EmailContact, MobileContact } from "@/utils/constants"
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6"

const socialLinks = [
  {
    icon: FaGithub,
    label: "praveenmsp23",
    url: "https://github.com/praveenmsp23",
  },
  {
    icon: FaLinkedin,
    label: "praveenmsp23",
    url: "https://www.linkedin.com/in/praveenmsp23",
  },
  {
    icon: FaEnvelope,
    label: "praveenmsp23@gmail.com",
    url: EmailContact,
  },
  {
    icon: FaPhone,
    label: "+91 9942080840",
    url: MobileContact,
  },
]

export default function Footer() {
  return (
    <footer className="flex w-full max-w-7xl flex-col items-center justify-between gap-4 py-4 md:flex-row">
      <div className="flex items-center gap-4">
        {socialLinks.map((link, i) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" key={i}>
            <div className="group relative flex items-center">
              <link.icon className="h-6 w-6" />
              <span className="ml-2 hidden w-0 overflow-hidden whitespace-nowrap bg-black text-sm text-white transition-all duration-300 group-hover:w-auto group-hover:px-2 md:block">
                {link.label}
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-sm tracking-wide text-gray-300">© 2024 Praveen M. All rights reserved.</p>
    </footer>
  )
}
