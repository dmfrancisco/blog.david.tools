export default {
  helmet: {
    title: "Blog · David Francisco",
    author: "David Marquês Francisco",
    twitter: "@dmfrancisco",
    description: "Hello, I'm a web developer from Coimbra that focuses on front-end and design.",
    publicUrl: "https://blog.david.tools",
  },
  nav: [
    {
      text: "Home",
      href: "https://david.tools",
    },
    {
      text: "Twitter",
      href: "https://twitter.com/dmfrancisco",
    },
    {
      text: "GitHub",
      href: "https://github.com/dmfrancisco",
    },
    {
      text: "Dribbble",
      href: "https://dribbble.com/davidfrancisco",
    },
    {
      text: "Instagram",
      href: "https://instagram.com/dmfrancisco",
    },
    {
      text: "Email",
      href: "mailto:hello@dmfranc.com",
    },
  ],
  posts: {
    "forking-a-npm-package": {
      title: "Forking a npm package",
      summary:
        "Whenever you want to fork a package's repository from GitHub and install with npm, but the dist files are missing, you can use a prepare script.",
      date: "2018-03-01",
      gist: "7aa5138ae1dbc5748c2994956907acd0",
    },
    "next-react": {
      title: "We're ready for the next React",
      summary:
        "I really enjoy developing with React and I use it for all sorts of projects. But we may need a paradigm shift to take our web interfaces to the next level.",
      date: "2018-02-27",
      gist: "32c3f0f3a4004b3cb36e6615ae4ba8ee",
      convert: true,
    },
    "creating-blog-with-cra-and-github-2": {
      title: "Blog with Create React App and GitHub: Adding comments",
      summary:
        "Last post we created a simple blog using Create React App and GitHub Gists. With Gists we can allow visitors to comment.",
      date: "2018-02-25",
      gist: "34d379919c0fb44eb800ad8beeae9b86",
    },
    "creating-blog-with-cra-and-github-pt": {
      title: "Criar um blog com Create React App e GitHub 🇵🇹",
      summary:
        "Existem vários projectos de código aberto muito bons para criar blogs estáticos, e Create React App pode ser um deles, se lhe juntar ferramentas para resolver algumas das limitações.",
      date: "2018-02-20",
      gist: "ad8794fef22f015324161062fcdc2b41",
      lang: "pt",
    },
    "creating-blog-with-cra-and-github": {
      title: "Creating a blog with Create React App and GitHub",
      summary:
        "There are great open source projects to generate static blogs, and Create React App can be one of them, if you add some tools to address some of its limitations.",
      date: "2018-02-18",
      gist: "f4f5311ad2ec25147bc458d791fdaeb5",
    },
    "crv-custom-fonts": {
      title: "CRV: Using custom fonts",
      summary: "Using custom fonts in Create React Video is easy!",
      date: "2017-09-02",
      gist: "37e5dcecf5dabeed34bdd3c241ef504d",
    },
    "create-react-video-v020": {
      title: "Create React Video v0.2.0 🎉",
      summary: "The first public release of Create React Video is now available!",
      date: "2017-08-31",
      gist: "5c0f880ee04a884fd354019390ec9c27",
    },
    "create-react-video": {
      title: "Create React Video 🎥",
      summary: "I'm excited to share with you a side project I've been working on.",
      date: "2017-08-27",
      gist: "aa0ef8f07dc4b1b2bb2e9160002606f8",
      convert: true,
    },
    "hello-world": {
      title: "Hello, World! 👀",
      summary: "Hello! And welcome to this blog. How are you today?",
      date: "2017-08-16",
      gist: "8a882e5dc6d8663e03451d7dfc9a9ecd",
    },
  },
};
