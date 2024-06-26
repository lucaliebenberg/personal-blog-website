const siteMetadata = {
  title: 'Blog | Luca Liebenberg',
  author: 'Luca Liebenberg',
  headerTitle: 'TechFit.',
  description: 'My personal blog where I share what I learn',
  // snippets: 'Reuseable code snippets collected by Parth',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://luca-blogs.vercel.app',
  siteRepo: 'https://github.com/lucaliebenberg/personal-blog-website',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/portfolio-image.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'liebenbergluca@gmail.com',
  github: 'https://github.com/lucaliebenberg',
  twitter: 'https://twitter.com/',
  linkedin: 'https://www.linkedin.com/in/lucaliebenberg/',
  website: 'https://lucaliebenberg.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: '`twitter.com',
  },
}

module.exports = siteMetadata
