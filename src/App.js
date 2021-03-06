import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './Comonents/TodoContext';
import TodoCreate from './Comonents/TodoCreate';
import TodoHead from './Comonents/TodoHead';
import TodoList from './Comonents/TodoList';
import TodoTemplate from './Comonents/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
