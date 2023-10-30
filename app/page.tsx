"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const AboutPage = () => {
    return (
      <section className="flex flex-col w-[40rem] space-y-6">
        <p>
          Hello there. I{`'`}m Hilmy Veradin, Software Engineer based in Indonesia. Currently
          building{" "}
          <a
            href="https://www.CobaUjian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-[0.5px]"
          >
            CobaUjian
          </a>
          , a one-stop Indonesian exam platform, as a Frontend Engineer. <br />{" "}
          <br />
          Besides frontend web development, I am also interested in native iOS
          Development. In 2022, I graduated from the Apple Developer Academy
          @BINUS (the first Apple Developer Academy in Asia), was selected as one
          of the WWDC 2022 Scholars, and spent a one-year internship as an iOS
          Developer at{" "}
          <a
            href="https://mekari.com/produk/talenta/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-[0.5px]"
          >
            Mekari
          </a>
          , a leading SaaS company in Indonesia. <br /> <br />
          For more information about my professional journey and interests, feel
          free to explore my{" "}
          <Link
            href={"/projects"}
            className="underline underline-offset-2 decoration-[0.5px]"
          >
            Projects
          </Link>
          ,{" "}
          <Link
            href={"/blog"}
            className="underline underline-offset-2 decoration-[0.5px]"
          >
            Blog
          </Link>
          , and various social media profiles.
        </p>
      </section>
  )
}

export default AboutPage;