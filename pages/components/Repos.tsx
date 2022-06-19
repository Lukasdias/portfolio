import React, { ReactElement, useState, memo } from "react";
import { styled, keyframes } from "../../stitches.config";

import Asyren from "public/asyren.png";
import RocketCoffee from "public/rocket-coffe.png";
import RocketNft from "public/rocket-nft.png";
import RocketBlog from "public/rocket-blog.png";
import RocketGit from "public/rocket-git.png";
import ProtoCoin from "public/proto-coin.png";
import LetMeAsk from "public/let-me-ask.png";

import Image, { StaticImageData } from "next/image";

import {
  VercelLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)", scale: 0 },
  "100%": { opacity: 1, transform: "translateY(0)", scale: 1 },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)", scale: 0 },
  "100%": { opacity: 1, transform: "translateX(0)", scale: 1 },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)", scale: 0 },
  "100%": { opacity: 1, transform: "translateY(0)", scale: 1 },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)", scale: 0 },
  "100%": { opacity: 1, transform: "translateX(0)", scale: 1 },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: "$hiContrast",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "500ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(HoverCardPrimitive.Arrow, {
  fill: "$hiContrast",
});

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = StyledContent;
const HoverCardArrow = StyledArrow;

const Flex = styled("div", { display: "flex" });

const ImageTrigger = styled("a", {
  all: "unset",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  padding: "$2",
  width: "90vw",
  "@bp1": {
    width: 500,
  },
  "@bp2": {
    width: 900,
  },
  "&:focus": { filter: "brightness(0.5)" },
  "&:hover": {
    filter: "brightness(0.5)",
  },
});

const Img = styled(Image, {
  display: "block",
  maxWidth: "100%",
  transition: "all 200ms",
  borderRadius: "$3",
  "&:hover": {
    filter: "brightness(0.5)",
  },
});

const Text = styled("div", {
  margin: 0,
  color: "$loContrast",
  display: "block",
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: "$loContrast" },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const Link = styled("a", {
  margin: 0,
  color: "$loContrast",
  display: "flex",
  alignItems: "center",
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: "$loContrast" },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const Description = styled("div", {
  margin: 0,
  color: "$loContrast",
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: "$loContrast" },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const TwitterWrapper = styled(Flex, {
  fd: "column",
  gap: "$1",
});

const TTIcon = styled(TwitterLogoIcon, {
  color: "$loContrast",
});

type HoverCardData = {
  pic: StaticImageData;
  git?: string;
  twitter?: string;
  url: string;
  name: string;
  id: string;
  description: string;
};

const urls = [RocketCoffee, RocketBlog, RocketGit, ProtoCoin, LetMeAsk];

const repos: HoverCardData[] = [
  {
    pic: Asyren,
    url: "https://astralgamestudio.itch.io/asyren",
    name: "Asyren",
    id: "astralgamestudio",
    twitter: "studio_astral",
    description:
      "I was one of the 4 programmers at this 2D action adventure game with a some RPG-like mechanics. It is set in a fantasy world where an excluded goddess called Unn'a is trying to take control of the world in a search for power. As a renegade female priest, who were once deceived by Unn'a, the player must now stop the goddess and save the continent of Asyren.",
  },

  {
    pic: RocketCoffee,
    git: "https://github.com/Lukasdias/rocket-coffee",
    url: "https://my-rocket-coffee.netlify.app/",
    name: "Rocket Coffee",
    id: "rocketCoffee",
    description:
      "On this challenge i've developed a landing page for a coffee brand using plain HTML, CSS and JS",
  },
  {
    pic: RocketBlog,
    git: "https://github.com/Lukasdias/rocket-blog",
    url: "https://my-rocket-blog.netlify.app/",
    name: "Rocket Blog",
    id: "rocketBlog",
    description:
      "On this challenge i've developed a Blog landing page  using Vite, React, Typescript and Tailwind",
  },
  {
    pic: RocketNft,
    git: "https://github.com/Lukasdias/rocket-nfts",
    url: "https://my-rocket-nfts.netlify.app/",
    name: "Rocket NFT",
    id: "rocketNFT",
    description:
      "On this challenge i've developed a nft landing page using Vite, React, Typescript and Tailwind ",
  },
  {
    pic: RocketGit,
    git: "https://github.com/Lukasdias/rocket-github-card",
    url: "https://rocket-github-card.vercel.app/",
    name: "Rocket Git",
    id: "rocketGit",
    description:
      "On this challenge i've developed an app that fetch Github API and generates a card with the searched user stats using Vite, React, Typescript and Tailwind",
  },
  {
    pic: ProtoCoin,
    git: "https://github.com/Lukasdias/protocoin",
    url: "https://proto-coin.vercel.app/",
    name: "Proto Coin",
    id: "protoCoin",
    description:
      "On this challenge i've developed a Bitcoin price dashboard website using Vite, React, Typescript, Tailwind, HeadlessUI, and the Binance API",
  },
  {
    pic: LetMeAsk,
    git: "https://github.com/Lukasdias/let-me-ask",
    url: "https://my-let-me-ask-app.web.app/",
    name: "Let Me Ask",
    id: "letMeAsk",
    description:
      "On this challenge i've developed a streamer's question hub using Vite, React, Typescript, Tailwind, Framer Motion, HeadlessUI, and Firebase Realtime Database",
  },
];

function Repos(): ReactElement {
  return (
    <>
      {repos.map((repo, idx: number) => (
        <HoverCard openDelay={200} closeDelay={200} key={idx}>
          <HoverCardTrigger asChild>
            <ImageTrigger
              href="https://twitter.com/radix_ui"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img src={repo.pic} />
            </ImageTrigger>
          </HoverCardTrigger>
          <HoverCardContent sideOffset={5} side={"left"}>
            <Flex css={{ flexDirection: "column", gap: 7 }}>
              <Img src={repo.pic} />
              <Flex css={{ flexDirection: "column", gap: 15 }}>
                {repo.twitter ? (
                  <TwitterWrapper>
                    <Text>{repo.name}</Text>
                    <Link
                      bold
                      css={{ display: "flex", alignItems: "center", gap: "$1" }}
                    >
                      <TTIcon />
                      {repo.twitter}
                    </Link>
                    <Description>{repo.description}</Description>
                  </TwitterWrapper>
                ) : (
                  <>
                    <Text>
                      <Link bold>{repo.name}</Link>
                      <Link faded>@{repo.id}</Link>
                    </Text>
                    <Description>{repo.description}</Description>
                  </>
                )}
              </Flex>
            </Flex>
            <HoverCardArrow />
          </HoverCardContent>
        </HoverCard>
      ))}
    </>
  );
}

export default memo(Repos);
