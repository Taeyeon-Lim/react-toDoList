import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text='create-react-app' done={true} />
      <TodoItem text='create UI' done={true} />
      <TodoItem text='create Context' done={false} />
      <TodoItem text='feature' done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
