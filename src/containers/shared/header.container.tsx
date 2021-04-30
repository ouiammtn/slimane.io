import { HeaderProps } from "../../types/home/header.types";
import Header from "../../components/shared/Header";
import React from "react";

const navbarProps: HeaderProps = {
  links: [
    {
      label: "Articles",
      link: "/articles",
    },
    {
      label: "Podcast",
      link: "/podcast",
    },
    {
      label: "Videos",
      link: "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
      isExternal: true,
    },
    {
      label: "Resume",
      link: "https://bit.ly/3dStCLQ",
      isExternal: true,
    },
    {
      label: "Contact",
      link: "https://www.linkedin.com/in/slimaneakalie",
      isExternal: true,
    },
  ],
};

export default function HeaderContainer(): JSX.Element {
  return <Header {...navbarProps} />;
}
