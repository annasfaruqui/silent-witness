import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* Brand Color */
  --color-brand-100: #c2ddff;
  --color-brand-200: #aed2fe;
  --color-brand-300: #86bafb;
  --color-brand-400: #71aefa;
  --color-brand-500: #5ba2f8;
  --color-brand-600: #2789f3;
  --color-brand-700: #1a64b4;
  --color-brand-800: #145397;
  --color-brand-900: #0e427a;

  /* Extra colors */
  --color-red-100: #fee2e2;
  --color-red-200: #b91c1c;
  --color-red-300: #991b1b;

  --color-silver-100: #e5e7eb;
  --color-silver-200: #374151;

  --color-green-100: #dcfce7;
  --color-green-200: #15803d;
  --color-green-300: #0c5d2b;

  --color-yellow-100: #fef9c3;
  --color-yellow-200: #a16207;
  --color-yellow-300: #814e06;

  --color-blue-100: #c2ddff;
  --color-blue-200: #2789f3;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  /* Font Sizes */
  --font-xs: 1.2rem;
  --font-sm: 1.4rem;
  --font-md: 1.6rem;
  --font-lg: 1.8rem;
  --font-xl: 2.6rem;
  --font-2xl: 3rem;
  --font-3xl: 5rem;

  /* Border radius */
  --border-radius-sm: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* Box shadow */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

*::-webkit-scrollbar{
  width: 1rem;
}

*::-webkit-scrollbar-track{
  background-color: var(--color-brand-200);
}

*::-webkit-scrollbar-thumb{
  background-color: var(--color-brand-600);
  border-radius: var(--border-radius-sm);
}

*::-webkit-scrollbar-thumb:hover{
  background-color: var(--color-brand-900);
}

html {
  font-size: 62.5%;
}

@media (max-width: 56em) {
  html {
    font-size: 56.25%;
  }
}

@media (max-width: 32em) {
  html {
    font-size: 50%;
  }
}

body {
  font-family: "Rubik", sans-serif;
  color: var(--color-grey-700);
  background-color: var(--color-grey-50);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  line-height: 1.2;
}

p{
  overflow-wrap: break-word ;
  hyphens:auto;
  line-height: 1.2;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
