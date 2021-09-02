import { addTodoAction } from 'reducers/todos';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState, useCallback, ReactElement } from 'react';

const TodoForm = (): ReactElement => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(addTodoAction(text));
      setText('');
    },
    [text],
  );

  const onchangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <TodoInputWrapper>
      <InsertForm onSubmit={onSubmit}>
        <CustomInput
          value={text}
          onChange={onchangeText}
          placeholder="할 일을 적어주세요."
        />
        <Button type="submit">추가</Button>
      </InsertForm>
    </TodoInputWrapper>
  );
};

export default TodoForm;

const TodoInputWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;
const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const CustomInput = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const Button = styled.button`
  background: black;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
