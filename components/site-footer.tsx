"use client"

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";


const SiteFooter = () => {
  return (
    <div className="flex flex-col w-[40rem] space-y-6">
              <Separator className="!mt-20 bg-white border-[0.5px]"/>
        <div className="flex space-x-2">
          <a
            href={"https://twitter.com/hveradin"}
            className="underline underline-offset-2 decoration-[0.5px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href={"https://github.com/hilmyveradin"}
            className="underline underline-offset-2 decoration-[0.5px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href={"https://www.linkedin.com/in/hilmyveradin/"}
            className="underline underline-offset-2 decoration-[0.5px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
    </div>
    
  )

}

export default SiteFooter;