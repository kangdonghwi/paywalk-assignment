import TodoList from './components/TodoList';
import TodoForm from 'components/TodoForm';
import { ReactElement } from 'react';
import styled from 'styled-components';

function App(): ReactElement {
  return (
    <TodoBody>
      <TodoForm />
      <TodoList />
    </TodoBody>
  );
}

export default App;

const TodoBody = styled.div`
  max-width: 100rem;
  display: flex;
  margin: 0 auto;
  padding-top: 10rem;
  box-sizing: border-box;
`;
