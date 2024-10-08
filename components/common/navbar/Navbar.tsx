// This component represents the navigation bar for the portfolio website
// It features:
// - Responsive design that adapts to mobile and desktop views
// - Links to different sections of the website using react-scroll
// - A mobile menu toggle for smaller screens
// - Custom styling with clsx for conditional classes
// - Uses HeaderText component for consistent text formatting
// - Implements useState and useEffect hooks for managing mobile menu state and window resizing
// The component is designed to provide easy navigation throughout the single-page application
// while maintaining a consistent look and feel with the rest of the site

import clsx from "clsx";
import HeaderText from "../text/HeaderText";
// import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Link as LinkRS } from "react-scroll";

export default function Navbar(): JSX.Element {
  const Links = [
    {
      label: "Home",
      to: "hero",
    },
    {
      label: "Projects",
      to: "projects",
    },
    {
      label: "Stack",
      to: "experience",
    },
    {
      label: "About Me",
      to: "about",
    },
    {
      label: "Learn Three.js",
      to: "learn_three_js",
    },
    {
      label: "Contact",
      to: "contact",
    },
  ];

  const [showMobileMenu, setShowMobileMenu] =
    useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<number>(0);

  useEffect(() => {
    setIsMobile(window.innerWidth);
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth)
    );
  }, []);

  return (
    <div
      className={clsx(
        " bg-grey-900 bg-opacity-60 absolute z-50",
        "w-full h-[60px] px-[30px]",
        "flex justify-between items-center border-b-[1px] border-grey-300"
      )}>
      <div
        className={clsx(
          "w-full max-w-[1300px] m-auto flex justify-between items-center"
        )}>
        <div
          className={clsx(
            "z-50",
            `${showMobileMenu ? "fixed" : "relative"}`
          )}>
          <HeaderText color={"text-white-1000"}>
            ST
          </HeaderText>
        </div>

        <ul
          className={clsx(
            "md:flex gap-3 ",
            "desktop lg:relative lg:flex lg:bg-opacity-0 lg:h-fit lg:flex-row lg:top-0 lg:left-0",
            "desktop lg:text-left lg:justify-start lg:w-fit",
            "mobile fixed top-[0px] w-full h-[calc(100vh)] bg-grey-900",
            "mobile flex justify-center flex-col text-center",
            `mobile ${showMobileMenu ? "left-[0px]" : "left-[-120%]"
            } transition-[left] duration-300 ease-in`
          )}>
          {Links.map((item, index) => (
            <li key={index} className='text-center'>
              <LinkRS
                to={item.to}
                smooth={true}
                onClick={() =>
                  isMobile < 768
                    ? setShowMobileMenu(!showMobileMenu)
                    : null
                }
                className={clsx(
                  "text-[14px] font-main text-grey-500 uppercase font-400 cursor-pointer",
                  "hover:text-white-1000 hover:underline"
                )}>
                {item.label}
              </LinkRS>
            </li>
          ))}
        </ul>

        <div
          id='mobile_icon'
          className={clsx(
            "lg:hidden",
            "text-32p text-grey-300 z-50",
            "absolute right-[26px]",
            "hover:text-white-1000"
          )}
          onClick={() =>
            setShowMobileMenu(!showMobileMenu)
          }>
          <CgMenuGridR />
        </div>
      </div>
    </div>
  );
}
