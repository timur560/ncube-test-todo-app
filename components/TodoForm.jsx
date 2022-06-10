import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { useTaskActions } from '../store/todoStore';
import { Button } from './ui/Button';
import { TextInput } from './ui/TextInput';

const TodoFormContainer = styled.div`
  margin: 24px;
`;

const TodoForm = () => {
  const router = useRouter();
  const { addTask } = useTaskActions();

  const [title, setTitle] = useState('');

  const handleAdd = () => {
    // not a good idea to create for 1st user by default, but...
    addTask(title, +router.query?.userId || 1);
    setTitle('');
  }

  return (
    <TodoFormContainer>
      <TextInput type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      <Button onClick={handleAdd}>Add</Button>
    </TodoFormContainer>
  );
}

export default TodoForm;