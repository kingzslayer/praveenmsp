interface TooltipProps {
  message: string
  children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  return (
    <div className="group relative flex flex-col items-center">
      {children}
      <div className="absolute bottom-0 mb-6 hidden flex-col items-center group-hover:flex group-hover:animate-bounce">
        <span className="whitespace-no-wrap relative z-10 rounded-md bg-slate-900 p-2 text-xs leading-none text-white shadow-lg">
          {message}
        </span>
      </div>
    </div>
  )
}

export default Tooltip
