import { HeaderProps } from "../../types/home/header.types";
import Header from "../../components/shared/Header";
import React from "react";

const navbarProps: HeaderProps = {
  links: [
    {
      label: "Articles",
      link: "/articles",
    },
    // {
    //   label: "Tools",
    //   link: "/tools",
    // },
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
      label: "About",
      link: "/about",
    },
  ],
};

export default function HeaderContainer(): JSX.Element {
  return <Header {...navbarProps} />;
}
