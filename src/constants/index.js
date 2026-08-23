import {
      mobile,
      backend,
      creator,
      web,
      javascript,
      typescript,
      html,
      css,
      reactjs,
      redux,
      tailwind,
      nodejs,
      mongodb,
      git,
      figma,
      docker,
      meta,
      starbucks,
      tesla,
      shopify,
      carrent,
      threejs,
} from "../assets";

export const navLinks = [
    {
            id: "about",
            title: "About",
    },
    {
            id: "work",
            title: "Work",
    },
    {
            id: "contact",
            title: "Contact",
    },
    ];

const services = [
    {
            title: "Web Developer",
            icon: web,
    },
    {
            title: "React Native Developer",
            icon: mobile,
    },
    {
            title: "Backend Developer",
            icon: backend,
    },
    {
            title: "Content Creator",
            icon: creator,
    },
    ];

const technologies = [
    {
            name: "HTML 5",
            icon: html,
    },
    {
            name: "CSS 3",
            icon: css,
    },
    {
            name: "JavaScript",
            icon: javascript,
    },
    {
            name: "TypeScript",
            icon: typescript,
    },
    {
            name: "React JS",
            icon: reactjs,
    },
    {
            name: "Redux Toolkit",
            icon: redux,
    },
    {
            name: "Tailwind CSS",
            icon: tailwind,
    },
    {
            name: "Node JS",
            icon: nodejs,
    },
    {
            name: "MongoDB",
            icon: mongodb,
    },
    {
            name: "Three JS",
            icon: threejs,
    },
    {
            name: "git",
            icon: git,
    },
    {
            name: "figma",
            icon: figma,
    },
    {
            name: "docker",
            icon: docker,
    },
    ];

const experiences = [
    {
            title: "React.js Developer",
            company_name: "Starbucks",
            icon: starbucks,
            iconBg: "#383E56",
            date: "Dec 2023 - April 2026",
            points: [
                      "Developing and maintaining web applications using React.js and other related technologies.",
                      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                      "Implementing responsive design and ensuring cross-browser compatibility.",
                      "Participating in code reviews and providing constructive feedback to other developers.",
                    ],
    },
    {
            title: "React Native Developer",
            company_name: "Tesla",
            icon: tesla,
            iconBg: "#E6DEDD",
            date: "Jan 2021 - Feb 2022",
            points: [
                      "Developing and maintaining web applications using React.js and other related technologies.",
                      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                      "Implementing responsive design and ensuring cross-browser compatibility.",
                      "Participating in code reviews and providing constructive feedback to other developers.",
                    ],
    },
    {
            title: "Web Developer",
            company_name: "Shopify",
            icon: shopify,
            iconBg: "#383E56",
            date: "Jan 2022 - Jan 2023",
            points: [
                      "Developing and maintaining web applications using React.js and other related technologies.",
                      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                      "Implementing responsive design and ensuring cross-browser compatibility.",
                      "Participating in code reviews and providing constructive feedback to other developers.",
                    ],
    },
    {
            title: "Full stack Developer",
            company_name: "Meta",
            icon: meta,
            iconBg: "#E6DEDD",
            date: "Jan 2023 - Present",
            points: [
                      "Developing and maintaining web applications using React.js and other related technologies.",
                      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                      "Implementing responsive design and ensuring cross-browser compatibility.",
                      "Participating in code reviews and providing constructive feedback to other developers.",
                    ],
    },
    ];

const testimonials = [
    {
            testimonial:
                      "Golweyne turned a vague idea into a polished product in record time. Communication was clear at every step, and the final build exceeded what we imagined.",
            name: "Amara Osei",
            designation: "Founder",
            company: "Novalytics",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
            testimonial:
                      "What stood out was the attention to detail, clean code, thoughtful UX, and a site that just feels fast. Our users noticed the difference immediately.",
            name: "Daniel Kim",
            designation: "Product Lead",
            company: "Brightloop",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
            testimonial:
                      "Working with Golweyne was seamless from kickoff to launch. Deadlines were hit, feedback was welcomed, and the end result speaks for itself.",
            name: "Priya Nandakumar",
            designation: "Operations Director",
            company: "Fieldstack",
            image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    ];

const projects = [
    {
            name: "Car Rent",
            description:
                      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
            tags: [
                {
                            name: "react",
                            color: "blue-text-gradient",
                },
                {
                            name: "mongodb",
                            color: "green-text-gradient",
                },
                {
                            name: "tailwind",
                            color: "pink-text-gradient",
                },
                    ],
            image: carrent,
            source_code_link: "https://github.com/GOLWEYNE/AlanSchool",
    },
    ];

export { services, technologies, experiences, testimonials, projects };
