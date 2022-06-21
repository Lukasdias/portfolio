import type { NextPage } from "next";
import { styled, getCssText } from "../stitches.config";
import Topbar from "./custom/Topbar";
import Head from "next/head";
import Intro from "./components/Intro";
import Repos from "./components/Repos";
import { VercelLogoIcon } from "@radix-ui/react-icons";

const Container = styled("div", {
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "$purple12",
  display: "flex",
  alignItems: "center",
  fd: "column",
});

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
});

const FooterLink = styled("a", {
  outline: "none",
  cursor: "pointer",
});

const FooterIcon = styled(VercelLogoIcon, {
  size: "$6",
  color: "$sage6",
  transition: "all 300ms ease-in-out",
  "&:hover": {
    color: "$sage9",
  },
});

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="" />
      </Head>
      <Welcome>
        <Topbar />
        <Title>Welcome to my portfolio</Title>
      </Welcome>
      <Intro />
      <Title>Projects</Title>
      <Repos />
      <Footer>
        <FooterLink href="https://vercel.com" target="_blank" rel="noopener">
          <FooterIcon />
        </FooterLink>
      </Footer>
    </Container>
  );
};

export default Home;
