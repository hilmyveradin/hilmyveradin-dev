interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Kata',
    description:
      'Kata is an all-in-one iOS language learning platform for Indonesians to learn 10 different languages. Kata also supports keyboard extension.',
    href: 'https://devpost.com/software/kata-indonesian-all-in-one-learning-language-platform',
  },
  {
    title: 'Share Tweet',
    description: `Share Tweet is an tweet image capturer. The purpose of this project is to create 16:9 tweet images that users can share`,
    href: 'https://share-tweet.com',
  },
  {
    title: 'BagiBuku.id',
    description: `Submission for Garuda Hacks Hackathon 4.0. My team and I created this site with the idea of enhancing Indonesian literacy by providing a platform to share and receive books.`,
    href: 'https://youtu.be/v0XUdI0nCUE',
  },
  {
    title: 'focusstopwatch.com',
    description: `Web Frontend Experiment. A web experiment that I conducted while studying frontend technologies. It is currently under development for other platforms.`,
    href: 'https://focusstopwatch.com/',
  },
  {
    title: 'You Do You',
    description: `Apple WWDC 2022 Submission. A WWDC Swift Student Challenge 2022 submission that was accepted among 350 other students worldwide.`,
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:6934900585812877312/',
  },
  {
    title: 'Digital Thoughts',
    description: `iOS App. My first iOS app, launched while I was studying at the Apple Developer Academy.`,
    href: 'https://apps.apple.com/id/app/digitalthoughts/id1621277281',
  },
  {
    title: 'PeriksaParu.com',
    description: `School Project. Periksaparu.com is a web app designed to detect lung diseases. My team and I created it for one of the largest student competitions held by Indonesia's Ministry of Education. We were selected as one of the top 10% of teams, earning funding for further research.`,
    href: 'https://github.com/hilmyveradin/PeriksaParu',
  },
]

export default projectsData
