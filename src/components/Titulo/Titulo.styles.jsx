import styled from 'styled-components';

export const TituloStyled = styled.h1`
  margin: ${({ theme }) => theme.espacamentos.medium};
  padding: 0;
  color: ${({ theme }) => theme.cores.secondary};
`;
