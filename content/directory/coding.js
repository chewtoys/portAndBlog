export default () => [
  {
    id: 6,
    slug: 'the-start-of-building-this-site',
    title: 'The Start of My Adventure Building This Site',
    tag_line: `My motivation for creating this site and choosing the tech stack I chose.`,
    created_at: '02/20/2019',
    pinned: false,
    intro: `A brief explanation and overview of my motivation and approach to building this portfolio and blog site while I am still very early in the process.`,
    meta: {
      keywords: 'Joey Gauthier, blog, portfolio, Nuxt, Netlify, Vue, markdown, UI, javascript',
      description: `How & why Joey Gauthier, the DigitalJedi, decided to build this portfolio, coding blog, and retro games blog.`
    },
    related: [7]
  },
  {
    id: 7,
    slug: 'design-inspiration-for-this-site',
    title: 'Design Inspiration for This Site',
    tag_line: `You try to make a pretty site using pixelated assets and 8-bit colors!`,
    created_at: '02/23/2019',
    image:
      'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552515487/gaming/march_2019_collection.jpg',
    alt: `photo of Joey Gauthier's game collection circa March 2019`,
    pinned: true,
    intro:
      'My thought process behind designing this seemingly random site that would make a designer cringe.',
    meta: {
      keywords:
        'Joey Gauthier, Paul Gauthier, portfolio, blog, design, retro games, pacman, mario, atari, nintendo, UI, javascript',
      description: `How Joey Gauthier made UX & UI decisions for his retro game inspired blog and portfolio.`
    },
    related: [6]
  }
];
