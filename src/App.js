import { createGlobalStyle } from 'styled-components';
import TodoHead from './Comonents/TodoHead';
import TodoTemplate from './Comonents/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;
