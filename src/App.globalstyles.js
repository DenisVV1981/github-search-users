import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
font-family: "StratosSkyeng";
src: local("StratosSkyeng"), local("StratosSkyeng"),
  url("/fonts/StratosSkyeng.woff2") format("woff2"),
  url("/fonts/StratosSkyeng.woff") format("woff");
font-weight: 400;
font-style: normal;
}

html,
body {
width: 100%;
height: 100%;
font-family: "StratosSkyeng", sans-serif;
color: black;
padding: 20px;
}
button,
._btn {
cursor: pointer;
}

._btn-text:active {
border-color: #ad61ff;
color: #ad61ff;
cursor: pointer;
}

._btn-icon:hover svg {
fill: transparent;
stroke: #acacac;
cursor: pointer;
}


._btn-icon:active svg {
fill: transparent;
stroke: #ffffff;
cursor: pointer;
}

._btn-icon:hover svg {
fill: transparent;
stroke: #acacac;
cursor: pointer;
}

._btn-icon:active svg {
fill: transparent;
stroke: #ffffff;
cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
fill: #696969;
stroke: #ffffff;
cursor: pointer;
}

::-webkit-scrollbar {
width: 10px;
}

::-webkit-scrollbar-track {
background: #f1f1f1; 
}

::-webkit-scrollbar-thumb {
background: #888; 
}

::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.player__track-play {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
}

.track-play__contain {
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author""image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}
`;

export default GlobalStyle;