interface Work {
  title: string
  role: string
  period: string
  description: string
  href?: string
  imgSrc?: string
}

const workData: Work[] = [
  {
    title: 'Webgis Indonesia',
    role: 'Part Time Frontend Engineer',
    period: 'December 2023 - present',
    description: `Webgis is a leading GIS company in Indonesia. Working on their CMS product called Geoportal`,
    href: 'http://dev3.webgis.co.id/login',
  },
  {
    title: 'CobaUjian',
    role: 'Part Time Fullstack Engineer',
    period: 'April 2023 - present',
    description: `CobaUjian.com is an all-in-one Indonesian tryout website that provides online simulation tests
that empower more than 3000+ indonesian. I built the product from scratch.`,
    href: 'https://www.cobaujian.com/',
  },
  {
    title: 'Stealth Startup',
    role: 'Part Time Frontend Engineer',
    period: 'August 2023 - May 2024',
    description: `Working on all-in-one productivity app with aims to develop SMEs. Mainly works on Meeting Modules though creating new features and bug fixing`,
  },
  {
    title: 'Mekari',
    role: 'iOS Developer Intern',
    period: 'May 2022 - May 2023',
    description: `Worked as part of the Talenta Time Management Team. In addition to doing junior engineer tasks, I also initiated the implementation of a new library that affected the entire internal development process.`,
    href: 'https://apps.apple.com/id/app/talenta/id1459958693?l=id',
  },
]

export default workData
