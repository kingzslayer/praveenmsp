interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="border-2 border-white px-4 py-2 transition-all duration-500 hover:bg-white hover:text-black">
      {children}
    </button>
  )
}
