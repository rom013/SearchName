import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
  }
  ::selection {
    color: #FFF;
    background: #7A0BC0;
  } 
  body {
    text-align: center;
    margin: 0;
    padding: 0;
    background: linear-gradient(243.18deg, #1A1A40 0%, #7A0BC0 100%);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    min-height: 100vh;
  }
  li{
    list-style: none
  }
`

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}