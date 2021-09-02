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
  width: 70%;
  height: 800px;

  min-width: 360px;
  max-width: 860px;

  position: relative;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
