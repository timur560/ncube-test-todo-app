import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTaskActions } from '../store/todoStore';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { Button } from './ui/Button';
import { LinksContainer } from './ui/LinksContainer';

const TodosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 20px;
`;

const TodoList = () => {
  const router = useRouter();
  const todos = useSelector(store => store.todos);
  const { fetchTodos } = useTaskActions();  

  const [todosFiltered, setTodosFiltered] = useState([]);

  useEffect(() => {
    if (todos.data.length === 0) {
      fetchTodos();
    }
  }, []);

  useEffect(() => {
    setTodosFiltered(
      router.query.userId
        ? todos.data?.filter((todo) => todo.userId === +router.query.userId)
        : todos.data
    );
  }, [router, todos]);

  return (
    <>
      <TopBar>
        <Title>Todo list</Title>
        <Button onClick={() => fetchTodos()}>Refetch Tasks</Button>
      </TopBar>
      <LinksContainer>
        <Link href="/">All</Link>
        <Link href="/?userId=1">User 1</Link>
        <Link href="/?userId=2">User 2</Link>
        <Link href="/?userId=3">User 3</Link>
      </LinksContainer>
      <TodoForm />
      <TodosContainer>
        {todos.isLoading && 'Loading...'}
        {todosFiltered?.map((a) => (
          <TodoItem key={a.id} {...a} />
        ))}
      </TodosContainer>
    </>
  );
};

export default TodoList;
