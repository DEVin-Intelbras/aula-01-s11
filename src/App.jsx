import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Botao } from './components/Botao/Botao';
import { Header } from './components/Header/Header';
import { Titulo } from './components/Titulo/Titulo';
import { GlobalStyle } from './theme/GlobalStyle';
import { dark, light } from './theme/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyle />

      <Header />

      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Trocar tema</button>

      <Titulo>Olá Mundo!</Titulo>

      <Botao cor='white' borderColor='rgb(255,0,0)'>
        Enviar
      </Botao>

      <Botao cor='black' variante='secondary' borderColor='#000'>
        Excluir
      </Botao>

      <Botao cor='black' variante='qualquercoisa' borderColor='purple'>
        Add
      </Botao>

      <Botao cor='black' variante='qualquercoisa' borderColor='purple' outline={true}>
        Outline
      </Botao>

      <ul>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
      </ul>
    </ThemeProvider>
  );
}

export default App;
