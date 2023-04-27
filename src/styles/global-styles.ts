import { createGlobalStyle } from 'styled-components'

export const GlobaStylesApp = createGlobalStyle`
html,
body {
  box-sizing: border-box;
  font-size: 16px;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  margin: 0;
  color:#040404;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;

  color: inherit;
}

h1,
h2,
h3,
h4 {
  margin: 0;
}


`
