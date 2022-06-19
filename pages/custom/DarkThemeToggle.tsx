import React, { memo } from "react";
import { styled } from "../../stitches.config";
import { darkTheme } from "../../stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as Popover from "@radix-ui/react-popover";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import * as Tooltip from "../components/Tooltip";

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
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.TriggerWrapper>
            <Light />
          </Tooltip.TriggerWrapper>
          <Tooltip.ContentWrapper sideOffset={5} portalled={true}>
            Light Mode
          </Tooltip.ContentWrapper>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Switch
        onClick={() =>
          setTheme(theme === "theme-default" ? darkTheme : "theme-default")
        }
        defaultChecked
        id="s1"
      >
        <Thumb />
      </Switch>
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.TriggerWrapper>
            <Dark />
          </Tooltip.TriggerWrapper>
          <Tooltip.ContentWrapper sideOffset={5} portalled={true}>
            Dark Mode
          </Tooltip.ContentWrapper>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Anchor>
  );
};

export default memo(DarkThemeToggle);
