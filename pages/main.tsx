import type { NextPage } from "next";
import { styled, getCssText } from "../stitches.config";
import Topbar from "./custom/Topbar";
import Head from "next/head";
import Intro from "./components/Intro";
import Repos from "./components/Repos";
import { Suspense } from "react";

const Title = styled("h1", {
  margin: "auto",
  padding: "$5",
  fontSize: "$9",
  fontWeight: "bold",
  color: "$purple6",
});

const Welcome = styled("div", {
  height: "auto",
  width: "100%",
  display: "flex",
  fd: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Footer = styled("footer", {
  width: "100%",
  padding: "$3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "$5",
  fontWeight: "bold",
  color: "$loContrast",
});

const Main: React.FC = () => {
  return (
    <>
      <Welcome>
        <Topbar />
        <Title>Welcome to my portfolio</Title>
      </Welcome>
      <Intro />
      <Title>Projects</Title>
      <Repos />
      <Footer>Made By Lukas</Footer>
    </>
  );
};

export default Main;
