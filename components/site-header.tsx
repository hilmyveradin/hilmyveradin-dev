"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

const SiteHeader = () => {
  const pathName = usePathname();

  let routeText;

  switch (pathName) {
    case '/':
      routeText = 'About';
      break;
    case '/projects':
      routeText = 'Projects';
      break;
    case '/blog':
      routeText = 'Blog';
      break;
    default:
      routeText = 'Unknown Page';
  }

  return (
    <header className="flex flex-col w-[40rem] space-y-4 mt-20">
    <h1 className="flex justify-start text-2xl font-bold">{routeText}</h1>
    <div className="flex justify-end space-x-4">
      <Link
        href={"/projects"}
        className={`text-lg ${pathName === "/projects" ? "text-gray-500": ""}`}
        replace
      >
        Projects
      </Link>
      <Link
        href={"/blog"}
        className={`text-lg ${pathName === "/blog" ? "text-gray-500": ""}`}
        replace
      >
        Blog
      </Link>
      <Link
        href={"/"}
        className={`text-lg ${pathName === "/" ? "text-gray-500 ": ""}`}
        replace
      >
        About
      </Link>
    </div>
    </header>
  )
}

export default SiteHeader;