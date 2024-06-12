import { ImSpinner2 } from 'react-icons/im'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ImSpinner2 className="animate-spin text-gray-200 text-6xl" />
    </div>
  )
}
