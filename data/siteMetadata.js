const siteMetadata = {
  title: "Jinseok's Blog",
  author: 'Jinseok',
  headerTitle: "Jinseok's Blog",
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'ko-kr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://jinseok.xyz',
  siteRepo: 'https://github.com/zhenshij/jinseok.xyz',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'jinseok.xyz@gmail.com',
  github: 'https://github.com/zhenshij',
  linkedin: 'https://www.linkedin.com/in/jinseok-kim',
  locale: 'ko-KR',
  text: {
    allPosts: '전체 글',
    exception: {
      notFound: {
        back: '홈으로 돌아가기',
        desc: '죄송합니다! 찾고 계신 페이지가 없습니다.\n페이지가 이동 또는 삭제되었을 수 있습니다.',
        title: '페이지를 찾을 수 없습니다',
      },
    },
    header: {
      cv: 'CV',
      blog: 'Blog',
      tags: 'Tags',
    },
    latest: '최근 글',
    noPostsFound: '글을 찾지 못했습니다.',
    post: {
      noPost: '글을 찾지 못했습니다.',
      page: {
        next: '다음',
        previous: '이전',
      },
      publishedOn: '배포',
      tags: '태그',
    },
    search: {
      placeholder: '블로그 내 검색하기',
    },
    toc: '목차',
    welcome: ['안녕하세요', 'Hello', '你好', 'こんにちは', 'Bonjour', 'Hola'],
  },
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
