import { createGlobalStyle, styled } from 'styled-components';
import color from './GlobalColors';

import ManropeRegularWoff from '../fonts/Manrope-Regular.woff';
import ManropeRegularWoff2 from '../fonts/Manrope-Regular.woff2';
import ManropeMediumWoff from '../fonts/Manrope-Medium.woff';
import ManropeMediumWoff2 from '../fonts/Manrope-Medium.woff2';
import ManropeSemiboldWoff from '../fonts/Manrope-Semibold.woff';
import ManropeSemiboldWoff2 from '../fonts/Manrope-Semibold.woff2';
import ManropeBoldWoff from '../fonts/Manrope-Bold.woff';
import ManropeBoldWoff2 from '../fonts/Manrope-Bold.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400; 
  src: url(${ManropeRegularWoff2}) format('woff2'), url(${ManropeRegularWoff}) format('woff');
}
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500; 
  src: url(${ManropeMediumWoff2}) format('woff2'), url(${ManropeMediumWoff}) format('woff');
}
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600; 
  src: url(${ManropeSemiboldWoff2}) format('woff2'), url(${ManropeSemiboldWoff}) format('woff');
}
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700; 
  src: url(${ManropeBoldWoff2}) format('woff2'), url(${ManropeBoldWoff}) format('woff');
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "SF Pro Text", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${color.blackPrimary};
  background-color: ${color.mainBackground};
  width: 100%;
  height: 100vh;
  margin: 0;  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  color: ${color.whitePrimary};
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: inherit;
  background: transparent;
  &:hover,
  &:focus {
    outline: none;
  }
}
html {
  scroll-behavior: smooth;
}
.no-scroll {
  overflow: hidden;
}
`;

export const  ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const  ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 1280px;
  padding: 64px 64px 80px 64px;  
`

export const Title = styled.h1`
  font-size: 54px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
`