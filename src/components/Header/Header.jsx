import { useTheme } from 'styled-components';
import { Botao } from '../Botao/Botao';
import { Titulo } from '../Titulo/Titulo';
import { HeaderStyled, TituloTeste } from './Header.styles';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <HeaderStyled>
        <Titulo>Olá Mundo!</Titulo>
        <h2>Teste</h2>

        <TituloTeste>Vermelho</TituloTeste>
      </HeaderStyled>

      <h2>ola</h2>

      <Botao cor={theme.cores.primary}>TEste Hook</Botao>
    </>
  );
};
