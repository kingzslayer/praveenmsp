import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={caveat.className}>
      <div className="flex h-screen items-center justify-center w-full">
        <h1 className="bg-gradient-to-r px-4 from-violet-600 to-pink-500 bg-clip-text text-8xl font-bold text-transparent">
          Praveen Msp
        </h1>
      </div>
    </main>
  )
}
