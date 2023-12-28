import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.1s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;
