import type { NextPage } from "next";
import { styled } from "../stitches.config";
import Topbar from "./custom/Topbar";
import Head from "next/head";
import Intro from "./components/Intro";
import Repos from "./components/Repos";

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

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="" />
      </Head>
      <Welcome>
        <Topbar />
        <Title>Welcome</Title>
      </Welcome>
      <Intro />
      <Title>Repos</Title>
      <Repos />
    </Container>
  );
};

export default Home;
