import { addTodoAction } from 'reducers/todos';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useCallback, ReactElement } from 'react';
import useInput from 'hooks/useInput';

//input form 컴포넌트
const TodoForm = (): ReactElement => {
  const [text, onChangeText, setText] = useInput('');
  const dispatch = useDispatch();

  //버튼을 누르면 addTodoAction를 디스패치하여 리스트에 추가됌
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(addTodoAction(text));
      setText('');
    },
    [text],
  );

  return (
    <TodoInputWrapper>
      <InsertForm onSubmit={onSubmit}>
        <CustomInput
          value={text}
          onChange={onChangeText}
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
