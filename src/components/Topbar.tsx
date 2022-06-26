import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { useAtom } from 'jotai';
import React, { memo } from 'react';
import { darkTheme } from '../../stitches.config';
import { keyframes, styled } from './../../stitches.config';
import { themeStableAtom } from './ContextMenu';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: '$2',
  lineHeight: 1,
  color: '$loContrast',
  fontWeight: '$heavy',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  backgroundColor: '$purple11',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  display: 'flex',
  padding: '$1',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 300ms',
  borderRadius: '$3',
  backgroundColor: 'transparent',
  color: '$loContrast',
  $$shadowColor: '$purple4',
  boxShadow: `0 3px 3px $$shadowColor`,
  '&:focus': {
    outline: 'none',
    background:
      'linear-gradient(25deg, rgb(250, 60, 249) 1.7%, rgb(252, 88, 126) 50.85%, rgb(252, 50, 57) 99.99%)',
  },
  '&:hover': {
    background:
      'linear-gradient(25deg, rgb(250, 60, 249) 1.7%, rgb(252, 88, 126) 50.85%, rgb(252, 50, 57) 99.99%)',
  },
  a: {
    '&:focus': {
      outline: 'none',
    },
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$blackA9',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px `,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: 'black' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  $$shadowColor: '$purple4',
  boxShadow: `0 3px 3px $$shadowColor`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

const Anchor = styled('div', {
  position: 'relative',
  px: '$3',
  py: '$3',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
});

const Light = styled(SunIcon, {
  size: '$5',
});

const Dark = styled(MoonIcon, {
  size: '$5',
});

const Git = styled(GitHubLogoIcon, {
  size: '$5',
});

const Linkedin = styled(LinkedInLogoIcon, { size: '$5' });

const DarkThemeToggleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
});

const PersonalLinksWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
});

const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const TriggerWrapper = StyledTrigger;
const ContentWrapper = StyledContent;

const Switch = StyledSwitch;
const Thumb = StyledThumb;

const Topbar: React.FC = () => {
  const [theme, setTheme] = useAtom(themeStableAtom);

  React.useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Anchor>
      <PersonalLinksWrapper>
        <Provider delayDuration={200}>
          <Root>
            <TriggerWrapper aria-label="github popover">
              <a
                aria-label="github link button"
                href="https://github.com/Lukasdias"
                target={'_blank'}
                rel="noreferrer"
              >
                <Git />
              </a>
            </TriggerWrapper>
            <ContentWrapper sideOffset={5} portalled={true}>
              Github
            </ContentWrapper>
          </Root>
        </Provider>
        <Provider delayDuration={200}>
          <Root>
            <TriggerWrapper aria-label="linkedin popover">
              <a
                aria-label="linkedin link button"
                href="https://www.linkedin.com/in/lukasdias/"
                target={'_blank'}
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </TriggerWrapper>
            <ContentWrapper sideOffset={5} portalled={true}>
              Linkedin
            </ContentWrapper>
          </Root>
        </Provider>
      </PersonalLinksWrapper>
      <DarkThemeToggleWrapper>
        <Provider delayDuration={200}>
          <Root>
            <TriggerWrapper type="button" aria-label="light theme popover">
              <Light />
            </TriggerWrapper>
            <ContentWrapper sideOffset={5} portalled={true}>
              Light
            </ContentWrapper>
          </Root>
        </Provider>
        <Switch
          type="button"
          aria-label="theme button toggler"
          onClick={() =>
            setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')
          }
          checked={theme === 'theme-default'}
          id="s1"
        >
          <Thumb />
        </Switch>
        <Provider delayDuration={200}>
          <Root>
            <TriggerWrapper type="button" aria-label="dark theme popover">
              <Dark />
            </TriggerWrapper>
            <ContentWrapper sideOffset={5} portalled={true}>
              Dark
            </ContentWrapper>
          </Root>
        </Provider>
      </DarkThemeToggleWrapper>
    </Anchor>
  );
};

export default memo(Topbar);
