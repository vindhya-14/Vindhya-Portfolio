/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "SnapCart",
    description:
      "SnapCart is a fast and intuitive e-commerce platform offering a seamless shopping experience with a wide range of products and quick checkout.",
    date: "2024-08-15",
    demoLink: "",
  },
  {
    id: 2,
    name: "UserHub",
    description:
      "UserHub is a user management app that enables easy addition, updating, and deletion of user profiles with a clean and intuitive interface.",
    date: "2024-06-20",
    demoLink: "",
  },
  {
    id: 3,
    name: "Cipher-Hunt",
    description:
      "Test your intuition and logic in this exciting game where the challenge is to reveal the secret number hidden in plain sight.",
    date: "2024-09-10",
    demoLink: "",
  },
  {
    id: 4,
    name: "URL-Shortener",
    description:
      "A URL Shortener is a tool that converts long URLs into shorter, more manageable links while maintaining their functionality. It often includes features like click tracking, analytics, and custom short links for enhanced usability and insights.",
    date: "2024-05-30",
    demoLink: "",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "",
    icon: "resume",
    newTab: true,
  },
];
