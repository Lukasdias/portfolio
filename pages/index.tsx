import type { NextPage } from "next";
import { Container } from "./components/Container";
import { styled } from "../stitches.config";
import DarkThemeToggle from "./custom/DarkThemeToggle";
import Head from "next/head";

const Header = styled("h1", {
  margin: "auto",
  padding: "$5",
  fontSize: "$9",
  fontWeight: "bold",
  color: "$purple6",
});

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="" />
      </Head>
      <DarkThemeToggle />
      <Header>Hello Stitches Portfolio</Header>
    </Container>
  );
};

export default Home;
