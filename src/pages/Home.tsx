import { motion } from "framer-motion";
import React from "react";
import Intro from "../components/Intro";
import Repos from "../components/Repos";
import Topbar from "../components/Topbar";
import { styled } from "./../../stitches.config";

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
  flexDirection: "column",
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

const Container = styled(motion.div, {
  width: "100%",
  display: "flex",
  fd: "column",
  alignItems: "center",
});

const Home: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 100, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Welcome>
        <Topbar />
        <Title>Welcome to my portfolio</Title>
      </Welcome>
      <Intro />
      <Title>Projects</Title>
      <Repos />
      <Footer>Made By Lukas</Footer>
    </Container>
  );
};

export default Home;
