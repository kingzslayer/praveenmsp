export default function NotFoundPage() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-200 md:text-4xl">page not found</h1>
        <p className="mt-2 text-lg tracking-normal text-gray-500 md:text-xl">
          Sorry, the page you are looking for does not exist or under development.
        </p>
      </div>
    </div>
  )
}
