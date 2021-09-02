import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactElement } from 'react';
import { Todo } from 'types';
//list컴포넌트 useSelector로 state를 가져다 사용
const TodoList = (): ReactElement => {
  const { todoState, count } = useSelector((state: any) => state.todos);

  return (
    <ListWrapper>
      <Count>남은일이 {count}개 남았어요</Count>
      {todoState.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ListWrapper>
  );
};

export default TodoList;

const ListWrapper = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const Count = styled.div`
  font-size: 22px;
  margin: 0 1.8rem;
  margin-bottom: 1rem;
`;
