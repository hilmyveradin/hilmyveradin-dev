interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: "Webgis Indonesia",
    description: `Webgis is a leading GIS company in Indonesia. Working on their CMS product called Geoportal`,
  },
  {
    title: "Stealth Startup",
    description: `Part Time, Frontend Engineer. Working on all-in-one productivity app with aims to develop SMEs. Mainly works on Meeting Modules though creating new features and bug fixing`,
  },
  {
    title: "CobaUjian",
    description: `Part Time, Frontend Engineer. Built the product from scratch.`,
    // imgSrc: '', // Add image source if available
    href: "https://www.cobaujian.com/",
  },
  {
    title: "Mekari",
    description: `Internship, iOS Engineer. Worked as part of the Talenta Time Management Team. In addition to doing junior engineer tasks, I also initiated the implementation of a new library that affected the entire internal development process.`,
    // imgSrc: '', // Add image source if available
    href: "https://apps.apple.com/id/app/talenta/id1459958693?l=id",
  },
  {
    title: "BagiBuku.id",
    description: `Submission for Garuda Hacks Hackathon. A Garuda Hacks 2023 submission. My team and I created this site with the idea of enhancing Indonesian literacy by providing a platform to share and receive books.`,
    // imgSrc: '', // Add image source if available
    href: "https://youtu.be/v0XUdI0nCUE",
  },
  {
    title: "focusstopwatch.com",
    description: `Web Frontend Experiment. A web experiment that I conducted while studying frontend technologies. It is currently under development for other platforms.`,
    // imgSrc: '', // Add image source if available
    href: "https://focusstopwatch.com/",
  },
  {
    title: "You Do You",
    description: `Apple WWDC 2022 Submission. A WWDC Swift Student Challenge 2022 submission that was accepted among 350 other students worldwide.`,
    // imgSrc: '', // Add image source if available
    href: "https://www.linkedin.com/feed/update/urn:li:activity:6934900585812877312/",
  },
  {
    title: "Digital Thoughts",
    description: `iOS App. My first iOS app, launched while I was studying at the Apple Developer Academy.`,
    // imgSrc: '', // Add image source if available
    href: "https://apps.apple.com/id/app/digitalthoughts/id1621277281",
  },
  {
    title: "PeriksaParu.com",
    description: `School Project. Periksaparu.com is a web app designed to detect lung diseases. My team and I created it for one of the largest student competitions held by Indonesia's Ministry of Education. We were selected as one of the top 10% of teams, earning funding for further research.`,
    // imgSrc: '', // Add image source if available
    href: "https://github.com/hilmyveradin/PeriksaParu",
  },
];

export default projectsData
