import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { atom, useAtom } from 'jotai';
import { ReactElement, useEffect } from 'react';
import { darkTheme, styled } from '../../stitches.config';

interface Props {
  children: any;
}

const StyledContent = styled(ContextMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: '$loContrast',
  borderRadius: 6,
  overflow: 'hidden',
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$purple11',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$purple9',
    color: '$purple1',
  },
};

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });

const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});

const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, {
  ...itemStyles,
});

const StyledTriggerItem = styled(ContextMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: '$purple4',
    color: '$purple11',
  },
  ...itemStyles,
});

const StyledLabel = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: '$purple11',
});

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$purple6',
  margin: 5,
});

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Box = styled('div', {});

const Instruction = styled('div', {
  border: `2px $loContrast dashed`,
  color: '$loContrast',
  borderRadius: 4,
  fontSize: 15,
  userSelect: 'none',
  padding: '45px 0',
  width: 300,
  textAlign: 'center',
});

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$mauve11',
  ':focus > &': { color: '$loContrast' },
  '[data-disabled] &': { color: '$mauve8' },
});

const ContextMenuRoot = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuContent = StyledContent;
const ContextMenuItem = StyledItem;
const ContextMenuCheckboxItem = StyledCheckboxItem;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuRadioItem = StyledRadioItem;
const ContextMenuItemIndicator = StyledItemIndicator;
const ContextMenuTriggerItem = StyledTriggerItem;
const ContextMenuLabel = StyledLabel;
const ContextMenuSeparator = StyledSeparator;

export const themeStableAtom = atom('theme-default');

export default function ContextMenu({ children }: Props): ReactElement {
  const [theme, setTheme] = useAtom(themeStableAtom);

  const handleReloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Box>
      <ContextMenuRoot>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent sideOffset={5}>
          <ContextMenuItem>
            Back <RightSlot>⌘+[</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem onClick={handleReloadPage}>
            Reload <RightSlot>⌘+R</RightSlot>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={theme === darkTheme}
            onCheckedChange={() => setTheme(darkTheme)}
          >
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Light Theme{' '}
            <RightSlot>
              <SunIcon />
            </RightSlot>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={theme !== darkTheme}
            onCheckedChange={() => setTheme('theme-default')}
          >
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Dark Theme{' '}
            <RightSlot>
              <MoonIcon />
            </RightSlot>
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenuRoot>
    </Box>
  );
}
