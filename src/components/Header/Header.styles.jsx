import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 20px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const TituloTeste = styled.h2`
  color: red;

  @media (min-width: 800px) {
    color: pink;
  }
`;
