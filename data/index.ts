export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Passionate about building next big things using latest technologies.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Love to learn and build exciting new things everyday!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description:
      "Some of the tools and technologies that I'm well-versed with...",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Let's build something with finesse—scalable, reliable, and loved by the end users! ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building and exploring something exciting with Golang...",
    description: "In progress",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Collaborate!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Token Orchestrar",
    des: "Efficiently generates, assigns, and manages API keys with dynamic creation, random retrieval, and automatic release.",
    img: "/token.jpg",
    iconLists: ["/ruby.svg", "/rails.svg", "/postgresql.svg"],
    link: "https://github.com/chitranshubisht/token-orchestrar",
  },
  {
    id: 2,
    title: "Turf Booking App",
    des: "An app designed to allow users to view and book sports facilities based on their preferences. Users can filter facilities by name and pincode, view facility details, and make bookings on an hourly basis.",
    img: "/sports.jpg",
    iconLists: [
      "/rails.svg",
      "/ruby.svg",
      "/javascript.svg",
      "/css.svg",
      "/postgresql.svg",
    ],
    link: "https://github.com/chitranshubisht/turf-booking-app",
  },
  {
    id: 3,
    title: "Real Time Weather Tracker",
    des: "Weather Tracker API fetching and displaying temperature data in multiple units using Go and OpenWeatherMap.",
    img: "weather.jpg",
    iconLists: ["/golang.svg", "/openweather.svg"],
    link: "https://github.com/chitranshubisht/weather-tracker-api",
  },
  {
    id: 4,
    title: "Portfolio Website",
    des: "Checkout the source code for this website...",
    img: "portfolio.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/html.svg",
      "/css.svg",
      "/three.svg",
      "/tail.svg",
    ],
    link: "https://github.com/chitranshubisht/medical-portal",
  },
];

export const testimonials = [
  {
    quote: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Solution Engineer - Deqode",
    desc: "Worked as a full stack developer ultilized Ruby on Rails and React to deliver industry standard features live.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SDE Intern - Contlo",
    desc: "Worked with an early aged startup, assisted in development of platform features their journey to zero to one as an intern.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Intern - Sakeesoft",
    desc: "Took the ownership of migrating the PHP features to the modern Angular, was indeed a great learning experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Microsoft - Azure Internship",
    desc: "Developed, deployed, and managed cloud solutions using Azure services, enhancing my skills in cloud computing, automation, and DevOps practices.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/chitranshubisht",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dev-chitranshu-bisht/",
  },
];
