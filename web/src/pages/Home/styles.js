import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 32px;
`;

export const Header = styled.header`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
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

export const ListContainer = styled.section`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;

      span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.section`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius:4px;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.primary.lighter};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background: transparent;
      border: none;
    }
  }
`;

export const InputSearchContainer = styled.section`
  width: 100%;

  input {
    width: 100%;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
