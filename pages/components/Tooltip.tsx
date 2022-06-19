import React, { memo } from "react";
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

export const Provider = TooltipPrimitive.Provider;
export const Root = TooltipPrimitive.Root;
export const TriggerWrapper = StyledTrigger;
export const ContentWrapper = StyledContent;
