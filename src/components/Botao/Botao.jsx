import { BotaoStyled, BotaoStyledOutline } from './Botao.styles';

export const Botao = ({ children, variante = 'primary', cor, borderColor, outline = false }) => {
  if (outline) {
    return (
      <BotaoStyledOutline cor={cor} borderColor={borderColor} onClick={() => console.log('Clicou')}>
        {children}
      </BotaoStyledOutline>
    );
  }

  return (
    <BotaoStyled
      variante={variante}
      cor={cor}
      borderColor={borderColor}
      onClick={() => console.log('Clicou')}
    >
      {children}
    </BotaoStyled>
  );
};
