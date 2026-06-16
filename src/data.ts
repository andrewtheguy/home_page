export interface FocusArea {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    icon: "/images/code-heading.svg",
    alt: "Ninja Coder",
    title: "Passionate coder",
    description:
      "My years of programming with open-source technology have taken me along the lines of learning Java in college, to PHP as a CMS hacker with the LAMP stack and now to Ruby and Rails and Responsive Front-End Web Development. I am also a Linux enthusiast and I like to set up Linux for servers and hacking Linux to make it work as well.",
  },
  {
    icon: "/images/beethoven-circle.svg",
    alt: "Classical Music Lover",
    title: "Classical music lover",
    description:
      "I am also an avid classical music listener. My interest in classical music started after the music appreciation class in college. I listen to classical music from the Baroque period all the way to the Romantic period. I like particularly musical compositions by Bach and Beethoven. One of the reasons I like classical music is because it is natural music played by natural instruments.",
  },
  {
    icon: "/images/circle-chef-hat.svg",
    alt: "Special Food Maker",
    title: "Special food maker",
    description:
      "Besides classical music, I also enjoy cooking special foods, especially oven-baked ones with natural ingredients. I make yeast-leavened bread and pastries such as flan, lemon meringue pie, apple pie, and others. I just love homemade food with natural ingredients.",
  },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/pub/jianchao-chen/13/562/75",
  },
  { label: "GitHub", href: "https://github.com/andrewtheguy" },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/2822056/andrew-chen",
  },
];
