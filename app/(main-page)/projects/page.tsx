"use client"

import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import SiteHeader from "@/components/site-header"

type ProjectCardProps = {
  link: string
  title: string
  description: string
  hoverText: string
}

const ProjectCard = ({
  link,
  title,
  description,
  hoverText,
}: ProjectCardProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild className="mb-1 sm:mb-2 hover:opacity-50">
          <a href={link} target="_blank" rel="noopener noreferrer py-2">
            <div className="flex items-center justify-between w-full">
              <p className="mr-2 font-semibold ">{title}</p>
              <p className="items-end max-w-[120px] lg:max-w-xs text-right">
                {description}
              </p>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent
          className="max-w-[20rem] bg-neutral-700 !rounded-[8px] border-0"
          side="bottom"
        >
          <p className="!rounded-lg">{hoverText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const ProjectsPage = () => {
  const projectData: ProjectCardProps[] = [
    {
      link: "#",
      title: "Stealth Startup",
      description: "Part Time, Frontend Engineer",
      hoverText: "(Currently undisclosed; set to launch soon!)",
    },
    {
      link: "https://www.cobaujian.com/",
      title: "CobaUjian",
      description: "Part Time, Frontend Engineer",
      hoverText: "Built the product from scratch.",
    },
    {
      link: "https://apps.apple.com/id/app/talenta/id1459958693?l=id",
      title: "Mekari",
      description: "Internship, iOS Engineer",
      hoverText:
        "Worked as part of the Talenta Time Management Team. In addition to doing junior engineer tasks, I also initiated the implementation of a new library that affected the entire internal development process.",
    },
  ]

  const weekendStuffsData: ProjectCardProps[] = [
    {
      link: "https://youtu.be/v0XUdI0nCUE",
      title: "BagiBuku.id",
      description: "Submission for Garuda Hacks Hackathon",
      hoverText:
        "A Garuda Hacks 2023 submission. My team and I created this site with the idea of enhancing Indonesian literacy by providing a platform to share and receive books.",
    },
    {
      link: "https://focusstopwatch.com/",
      title: "focusstopwatch.com",
      description: "Web Frontend Experiment",
      hoverText:
        "A web experiment that I conducted while studying frontend technologies. It is currently under development for other platforms.",
    },
    {
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6934900585812877312/",
      title: "You Do You",
      description: "Apple WWDC 2022 Submission",
      hoverText:
        "A WWDC Swift Student Challenge 2022 submission that was accepted among 350 other students worldwide.",
    },
    {
      link: "https://apps.apple.com/id/app/digitalthoughts/id1621277281",
      title: "Digital Thoughts",
      description: "iOS App",
      hoverText:
        "My first iOS app, launched while I was studying at the Apple Developer Academy.",
    },
    {
      link: "https://github.com/hilmyveradin/PeriksaParu",
      title: "PeriksaParu.com",
      description: "School Project",
      hoverText:
        "Periksaparu.com is a web app designed to detect lung diseases. My team and I created it for one of the largest student competitions held by Indonesia's Ministry of Education. We were selected as one of the top 10% of teams, earning funding for further research.",
    },
  ]

  return (
    <div className="flex max-w-[40rem] flex-col w-full">
      <div className="mb-12">
        <SiteHeader />
      </div>
      <h1 className="text-xl font-bold">Work</h1>
      <h3 className="mb-4">
        Here are the professional works that I{"'"}m involved in. And more
        importantly, proud of.
      </h3>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
      <h1 className="mt-16 text-xl font-bold">Weekend Stuffs</h1>
      <h3 className="mb-4">
        Bunch of things that I did for fun. (and deadlines)
      </h3>
      {weekendStuffsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

export default ProjectsPage
