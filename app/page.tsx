"use client"

import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import SiteHeader from "@/components/site-header"

const AboutPage = () => {
  return (
    <div>
      <div className="mb-12">
        <SiteHeader />
      </div>
      <section className="flex max-w-[40rem] flex-col space-y-6 w-full">
        <p>
          Hello there. I{`'`}m Hilmy Veradin, Software Engineer based in
          Indonesia. Currently building{" "}
          <a
            href="https://www.CobaUjian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[0.5px] underline-offset-2"
          >
            CobaUjian
          </a>
          , a one-stop Indonesian exam platform, as a Frontend Engineer. <br />{" "}
          <br />
          Besides frontend web development, I am also interested in native iOS
          Development. In 2022, I graduated from the Apple Developer Academy
          @BINUS (the first Apple Developer Academy in Asia), was selected as
          one of the WWDC 2022 Scholars, and spent a one-year internship as an
          iOS Developer at{" "}
          <a
            href="https://mekari.com/produk/talenta/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[0.5px] underline-offset-2"
          >
            Mekari
          </a>
          , a leading SaaS company in Indonesia. <br /> <br />
          For more information about my professional journey and interests, feel
          free to explore my{" "}
          <Link
            href={"/projects"}
            className="underline decoration-[0.5px] underline-offset-2"
          >
            Projects
          </Link>
          ,{" "}
          <Link
            href={"/blog"}
            className="underline decoration-[0.5px] underline-offset-2"
          >
            Blog
          </Link>
          , and various social media profiles.
        </p>
      </section>
    </div>
  )
}

export default AboutPage
