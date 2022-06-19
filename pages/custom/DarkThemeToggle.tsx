import React, { memo } from "react";
import { darkTheme } from "../../stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled, keyframes } from "./../../stitches.config";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: "10px 15px",
  fontSize: "$4",
  lineHeight: 1,
  color: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  backgroundColor: "$purple10",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  display: "flex",
  padding: "$1",
  border: "none",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 300ms",
  borderRadius: "$3",
  "&:focus": {
    outline: "none",
    background:
      "linear-gradient(25deg, rgb(250, 60, 249) 1.7%, rgb(252, 88, 126) 50.85%, rgb(252, 50, 57) 99.99%)",
  },
  "&:hover": {
    background:
      "linear-gradient(25deg, rgb(250, 60, 249) 1.7%, rgb(252, 88, 126) 50.85%, rgb(252, 50, 57) 99.99%)",
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: "$blackA9",
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px ${"$blackA7"}`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: "black" },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px ${"$blackA7"}`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" },
});

const Anchor = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  gap: "$2",
  top: "$3",
  right: "$4",
});

const Light = styled(SunIcon, {
  size: "$5",
});

const Dark = styled(MoonIcon, {
  size: "$5",
});

const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const TriggerWrapper = StyledTrigger;
const ContentWrapper = StyledContent;

const Switch = StyledSwitch;
const Thumb = StyledThumb;

const DarkThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState("theme-default");

  React.useEffect(() => {
    document.body.classList.remove("theme-default", darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Anchor>
      <Provider delayDuration={200}>
        <Root>
          <TriggerWrapper>
            <Light />
          </TriggerWrapper>
          <ContentWrapper sideOffset={5} portalled={true}>
            Light Mode
          </ContentWrapper>
        </Root>
      </Provider>
      <Switch
        onClick={() =>
          setTheme(theme === "theme-default" ? darkTheme : "theme-default")
        }
        defaultChecked
        id="s1"
      >
        <Thumb />
      </Switch>
      <Provider delayDuration={200}>
        <Root>
          <TriggerWrapper>
            <Dark />
          </TriggerWrapper>
          <ContentWrapper sideOffset={5} portalled={true}>
            Dark Mode
          </ContentWrapper>
        </Root>
      </Provider>
    </Anchor>
  );
};

export default memo(DarkThemeToggle);
