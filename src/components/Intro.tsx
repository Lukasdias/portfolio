import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { keyframes, styled } from "./../../stitches.config";

const Container = styled("div", {
  display: "flex",
});

const Content = styled("div", {
  width: "90%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  "@bp2": {
    width: "70%",
  },
  "@bp3": {
    width: "50%",
  },
});

const Text = styled("p", {
  fontSize: "$6",
  mb: "$2",
  color: "$loContrast",
});

const TextBox = styled("div", {
  fontSize: "$6",
  mb: "$2",
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
  mb: "$4",
});

const Rotate = keyframes({
  "0%": { opacity: 0, transform: "rotate(360deg)" },
  "100%": { opacity: 1, transform: "rotate(0deg)" },
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "1000ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    animationName: Rotate,
    animationDelay: "250ms",
  },
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

const ArticleLink = styled("a", {
  fontWeight: "bold",
  transition: "all 300ms",
  cursor: "pointer",
  color: "$purple6",
  "&:hover": {
    color: "$purple9",
  },
});

const Avatar = StyledAvatar;
const AvatarImage = StyledImage;
const AvatarFallback = StyledFallback;

const Intro: React.FC = () => {
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

        <TextBox>
          {"I'm"} Lukas Dias
          <ul>
            <li>
              Currently a student of Computer Science at the Federal University
              of Maranhão.
            </li>
            <li>
              I started working as a front end developer since 2019 on the
              article{" "}
              <ArticleLink
                href="http://ojs.sector3.com.br/index.php/sbie/article/viewFile/8819/6377"
                target="_blank"
                rel="noopener"
              >
                {`"Analysis of Gamification of a Virtual Learning Environment
                Based on Bartle's Profiles"`}
              </ArticleLink>
              ;
            </li>
            <li>
              A few months later I started working at{" "}
              <ArticleLink
                href="https://www.unasus.ufma.br/"
                target="_blank"
                rel="noopener"
              >
                UNASUS-UFMA{" "}
              </ArticleLink>
              with technologies like HTML, CSS, JS, ReactJS, Styled Components
              and MaterialUI.
            </li>
            <li>
              Now I work at{" "}
              <ArticleLink
                href="https://www.grupomateus.com.br/inovacao/"
                target="_blank"
                rel="noopener"
              >
                Pulse
              </ArticleLink>{" "}
              as a junior front end programmer, developing applications using
              ReactJS and React Native.
            </li>
          </ul>
        </TextBox>
      </Content>
    </Container>
  );
};

export default Intro;
