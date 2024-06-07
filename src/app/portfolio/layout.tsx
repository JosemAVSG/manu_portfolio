import Link from "next/link";

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white shadow-sm py-1 px-4 md:px-8 sm:py-2 z-50 flex flex-row justify-between items-center">
        <Link href={"/"} className="text-gray-500 text-xl font-semibold">Portfolio</Link>
        <div className="flex flex-row items-center gap-4 md:gap-8">
          <Link href={"/info"} className="text-gray-500 font-semibold">Info</Link>
          <span className="h-0.5 w-8 bg-gray-500"></span>
          <Link href={"/"} className="text-gray-500 font-semibold">Contact</Link>
        </div>

      </nav>
      {children}
    </div>
  )
}

export default layout
