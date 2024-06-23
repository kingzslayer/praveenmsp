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
    url: "mailto:praveenmsp23@gmail.com?subject=General%20Inquiry&body=Hi%20Praveen%20M,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20about%20[reason].%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0ABest%20regards,%0D%0A%0D%0A[Your%20Name]",
  },
  {
    icon: FaPhone,
    label: "+91 9942080840",
    url: "tel:+919942080840",
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
