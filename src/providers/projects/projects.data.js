export const projectData = [
  {
    media: {
      source: "clothing",
      github: "https://github.com/Vincent-Vais/Crwn-Clothing",
      ws: " https://crwn-clothing-my.herokuapp.com/",
      tags: ["React", "NodeJS", "Firebase", "HTML5", "CSS3", "Redux"],
    },
    text: {
      name: "CRWN CLOTHING",
      descr:
        "An online clothing store built using React with Redux, Node JS to handle payments using Stripe and Firebase to handle authentication and storing data.",
      features: [
        "One source of truth",
        "Fully functional payment feature",
        "Implemented routing",
        "Items in cart and User profile are persistant",
        "FullStack App that follows HOC Pattern and Component Driven Architecture",
      ],
    },
  },
  {
    media: {
      source: "yelp",
      github: "https://github.com/Vincent-Vais/YelpCamp",
      ws: "https://arrogant-loonie-13367.herokuapp.com/",
      tags: ["NodeJS", "MongoDB", "HTML5", "CSS3", "Express", "EJS"],
    },
    text: {
      name: "Yelp Camp",
      descr:
        "Clone of the yelp app for viewing campgrounds built with MEN stack an using guidance from The Web Developer Bootcamp by Colt Steele",
      features: [
        "Implemented authentication & authorization on backend",
        "App follows REST architectural style and CRUD pattern",
        "Created User & Comments data models with refs to each other",
        "User profile is persistant",
      ],
    },
  },
  {
    media: {
      source: "warbler",
      github: "https://github.com/Vincent-Vais/Warbler",
      ws: "https://warbler-my.herokuapp.com/",
      tags: ["NodeJS", "MongoDB", "HTML5", "CSS3", "Express", "React"],
    },
  },
  {
    media: {
      source: "citizy",
      github: "https://github.com/Vincent-Vais/CITIZY",
      ws: "https://aqueous-eyrie-08048.herokuapp.com/",
      tags: [
        "NodeJS",
        "MongoDB",
        "HTML5",
        "CSS3",
        "Express",
        "ES6",
        "Flask",
        "Webpack",
      ],
    },
  },
  {
    media: {
      source: "forkify",
      github: "https://github.com/Vincent-Vais/Forkify",
      ws: "https://nervous-jones-d59748.netlify.app/",
      tags: ["ES6", "Webpack", "HTML5", "CSS3"],
    },
  },
];

export const INIT_DATA = {
  media: {
    source: "",
    githib: "",
    ws: "",
    tags: [],
  },
  text: {
    name: "",
    descr: "",
    features: [],
  },
};

export const NUM_OF_PROJECTS = 2;
