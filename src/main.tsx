import '@fontsource/poppins';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from 'kbar';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { styled } from '../stitches.config';
import App from './core/App';
import './styles/global.css';

const MenuResults = styled(KBarAnimator, {
  width: '60vw',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: '$4',
  borderRadius: '$4',
  fontSize: '$6',
  backgroundColor: '$loContrast',
  color: '$purple3',
});

const Result = styled('div', {});

const MenuSearch = styled(KBarSearch, {
  width: '60vw',
  padding: '$4',
  borderRadius: '$4',
  fontSize: '$6',
  backgroundColor: '$loContrast',
  color: '$hiContrast',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KBarProvider actions={[]}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <MenuSearch />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
    <App />
  </React.StrictMode>
);
