import styled from 'styled-components';
import { useTaskActions } from '../store/todoStore';
import { Button } from './ui/Button';
import { TodoItemContainer } from './ui/TodoItemContainer';

const TodoTitle = styled.div`
  min-height: 70px;
`;

const TodoItem = ({ id, completed, userId, title }) => {
  const { finishTask, unFinishTask, removeTask } = useTaskActions();

  const handleDone = () => {
    finishTask(id);
  };

  const handleUnDone = () => {
    unFinishTask(id);
  }

  const handleRemove = () => {
    if (confirm('Are you sure?')) {
      removeTask(id);
    }
  }

  return (
    <TodoItemContainer completed={completed}>
      <TodoTitle>{title}</TodoTitle>
      <div>
        {completed
          ? <Button warninig onClick={handleUnDone}>Undone</Button>
          : <Button onClick={handleDone}>Done</Button>
        }
        <Button danger onClick={handleRemove}>Remove</Button>
      </div>
    </TodoItemContainer>
  )
}


export default TodoItem;