import styled, { css } from 'styled-components';

export const Button = styled.button`
  min-width: 90px;
  border: 1px solid #eee;
  border-radius: 12px;
  background-color: #6C9451;
  margin: 10px;
  padding: 10px;
  color: white;
  cursor: pointer;
  text-transform: uppercase;

  ${props => props.danger && css`
    background-color: #bc583f;
  `}

  ${props => props.warninig && css`
    background-color: #D6B616;
  `}
`;
