import Link from "next/link"
import Button from "@/components/button"
import { EmailContact } from "@/utils/constants"

const skills = [
  "JavaScript",
  "React",
  "Go lang",
  "Node.js",
  "Microservices",
  "SQL/NoSQL",
  "Docker",
  "AWS",
]

const projects = [
  {
    name: "ZeroGate",
    link: "https://zerogate.com",
  },
  {
    name: "Cyberdogz",
    link: "https://cyberdogz.io",
  },
]

export default function Home() {
  return (
    <main className="flex h-full items-start justify-center py-8 md:pt-20">
      <div className="flex flex-col gap-4 md:gap-6">
        <div>
          <h6 className="text-xl font-semibold md:text-2xl">Hello👋</h6>
          <h1 className="mt-2 text-4xl font-bold md:-ml-2 md:text-6xl lg:text-8xl">
            I'm Praveen Msp
          </h1>
          <h3 className="mt-6 text-2xl font-semibold md:text-3xl lg:text-4xl">
            Full Stack Developer
          </h3>
          <p className="w-full text-lg tracking-wide text-gray-200 md:w-3/4 md:text-xl">
            I am a software engineer with a passion for creating innovative solutions. I have a
            background in computer science and a strong interest in building secure web
            applications.
          </p>
        </div>
        <div>
          <Link href={EmailContact}>
            <Button>Hire Me</Button>
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">Skills</h2>
          <ul className="ml-4 grid list-disc grid-cols-2 gap-4 text-lg text-gray-200 md:text-xl lg:grid-cols-4">
            {skills.map((skill) => (
              <li key={skill} className="tracking-normal">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">Projects</h2>
          <ul className="ml-4 grid list-disc grid-cols-2 gap-4 text-lg text-gray-200 md:text-xl lg:grid-cols-4">
            {projects.map((project) => (
              <li key={project.name} className="tracking-normal">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
