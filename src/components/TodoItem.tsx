import {
  EDIT_TODOS_REQUEST,
  removeTodoAction,
  toggleTodoAction,
} from 'reducers/todos';
import { Todo } from 'types';
import useInput from 'hooks/useInput';
import { useCallback, useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

interface TodoItemProps {
  todo: Todo;
}
//todoItem 컴포넌트, 여기서 제거,토글,수정기능 처리
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { id, content, isCheck } = todo;
  const [open, setOpen] = useState(false);
  const [text, onChangeText, setText] = useInput('');
  const dispatch = useDispatch();

  const onRemoveTodo = useCallback(() => {
    dispatch(removeTodoAction(id));
  }, []);

  const onToggleTodo = useCallback(() => {
    dispatch(toggleTodoAction(id));
  }, []);

  const OpenInputText = () => {
    setOpen(true);
  };

  const onEditTodo = useCallback(
    e => {
      e.preventDefault();

      dispatch({
        type: EDIT_TODOS_REQUEST,
        data: {
          id: id,
          content: text,
        },
      });
      setOpen(false);
      setText('');
    },
    [text],
  );

  return (
    <ItemWrapper>
      <Checkbox onClick={onToggleTodo}>
        {isCheck ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      {open ? (
        <Form onSubmit={onEditTodo}>
          <Input value={text} onChange={onChangeText}></Input>
          <FormButton type="submit">수정</FormButton>
        </Form>
      ) : (
        <Text isCheck={todo.isCheck}>{content}</Text>
      )}
      <EditButton onClick={OpenInputText} />
      <RemoveButton onClick={onRemoveTodo} />
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.li`
  display: flex;
  line-height: 2rem;
  font-size: 1.5rem;
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  margin: 0 1.8rem;
  margin-bottom: 1rem;
  padding: 1.5rem 0.8rem;
  align-items: center;
`;
const Form = styled.form`
  flex: 1;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 70%;
  height: 22px;
`;

const FormButton = styled.button`
  margin-left: 10px;
`;
const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div<{ isCheck: boolean }>`
  flex: 1;
  font-size: 18px;

  ${props =>
    props.isCheck &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const EditButton = styled(MdEdit)`
  margin-right: 10px;
  cursor: pointer;
`;

const RemoveButton = styled(MdRemoveCircleOutline)`
  cursor: pointer;
`;
