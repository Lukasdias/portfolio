import { styled } from '../../stitches.config';
import ContextMenu from '../components/ContextMenu';
import Home from '../pages/Home';

const Container = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '$purple12',
  display: 'flex',
  alignItems: 'center',
  fd: 'column',
});

function App() {
  return (
    <>
      <ContextMenu>
        <Container>
          <Home />
        </Container>
      </ContextMenu>
    </>
  );
}

export default App;
