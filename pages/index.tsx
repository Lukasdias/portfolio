import type { NextPage } from "next";
import { styled } from "../stitches.config";
import { Suspense } from "react";
import Head from "next/head";
import Main from "./main";

const Container = styled("div", {
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "$purple12",
  display: "flex",
  alignItems: "center",
  fd: "column",
});

const Home: NextPage = () => {
  return (
    <Suspense fallback={<></>}>
      <Container>
        <Head>
          <title>My Portfolio</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main />
      </Container>
    </Suspense>
  );
};

export default Home;
