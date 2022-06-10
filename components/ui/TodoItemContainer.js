import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  width: 250px;
  height: fit-content;
  border: 1px solid #eee;
  border-radius: 12px;
  margin: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.completed ? '#a7ca72' : '#d89191'};
`;
