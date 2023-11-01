"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const SiteHeader = () => {
  const pathName = usePathname()

  let routeText

  switch (pathName) {
    case "/":
      routeText = "About"
      break
    case "/projects":
      routeText = "Projects"
      break
    case "/blog":
      routeText = "Blog"
      break
    default:
      routeText = "Unknown Page"
  }

  return (
    <header className="flex flex-col w-full mt-20 space-y-4">
      <h1 className="flex justify-start text-2xl font-bold">{routeText}</h1>
      <div className="flex justify-end space-x-4">
        <Link
          href={"/projects"}
          className={`text-lg ${
            pathName === "/projects" ? "text-neutral-400" : ""
          }`}
          replace
        >
          Projects
        </Link>
        <Link
          href={"/blog"}
          className={`text-lg ${
            pathName === "/blog" ? "text-neutral-400" : ""
          }`}
          replace
        >
          Blog
        </Link>
        <Link
          href={"/"}
          className={`text-lg ${pathName === "/" ? "text-neutral-400 " : ""}`}
          replace
        >
          About
        </Link>
      </div>
    </header>
  )
}

export default SiteHeader
