import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-weight: bold;
  border-radius: 4px;

  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCC;
    cursor: not-allowed;
  }
`;
