import styled from 'styled-components';

export const BotaoStyled = styled.button`
  background-color: ${({ variante }) => {
    if (variante === 'primary') {
      return 'black';
    }

    if (variante === 'secondary') {
      return 'green';
    }

    return 'red';
  }};
  cursor: pointer;
  border: ${({ borderColor }) => `3px solid ${borderColor}`};
  color: ${(props) => props.cor};

  &:hover {
    opacity: 0.5;
  }
`;

export const BotaoStyledOutline = styled(BotaoStyled)`
  background-color: white;
  border: 1px solid red;
`;
