import styled from 'styled-components';

export const Container = styled.section`
  & + & {
    margin-top: 16px;
  }
`;
