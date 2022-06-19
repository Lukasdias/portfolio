import React, { ReactElement } from "react";
import { styled } from "./../../stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const Container = styled("div", {
  display: "flex",
});

const Content = styled("div", {
  width: "50%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
});

const Text = styled("p", {
  fontSize: "$8",
  color: "$loContrast",
});

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  size: "$9",
  borderRadius: "100%",
  backgroundColor: "$blackA3",
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "$violet11",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const Avatar = StyledAvatar;
const AvatarImage = StyledImage;
const AvatarFallback = StyledFallback;

export default function Intro(): ReactElement {
  return (
    <Container>
      <Content>
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/20982029?v=4"
            alt="Lukas Dias"
          />
          <AvatarFallback delayMs={600}>LD</AvatarFallback>
        </Avatar>

        <Text>Lukas Dias</Text>

        <Text>
          Hi, {`i'm`} Lukas Henrique Braga Dias, a front end developer from
          Brazil, currently a undergraduate Computer Science student at the
          University of Maranhão and working at Pulse!
        </Text>
      </Content>
    </Container>
  );
}
