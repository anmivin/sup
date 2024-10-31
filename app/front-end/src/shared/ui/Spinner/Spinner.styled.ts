import { css, styled } from '@mui/material';

const colorArray = ['#46ddf0', '#3bd0b0', '#39c359', '#46d147', '#93e8a7', '#c2fde9', '#b2f4f3', '#70e7fb'];

const getColor = (i: number, pos: number) => {
  if (i + pos < colorArray.length) return colorArray[i + pos];
  else return colorArray[i + pos - colorArray.length];
};
const createStyles = () => {
  let styles = '';

  for (let i = 0; i < 8; i += 1) {
    styles += `
       .path_0${i + 1} {
         animation: change-path_0${i + 1} 1.5s linear infinite;
       }
         @keyframes change-path_0${i + 1} {
         0% {fill: ${getColor(i, 0)}}
         13% {fill: ${getColor(i, 1)}}
         25% {fill: ${getColor(i, 2)}}
         38% {fill: ${getColor(i, 3)}}
         50% {fill: ${getColor(i, 4)}}
         63% {fill: ${getColor(i, 5)}}
         75% {fill: ${getColor(i, 6)}}
         88% {fill: ${getColor(i, 7)}}
         100% {fill: ${getColor(i, 0)}}         
         }
     `;
  }

  return css`
    ${styles}
  `;
};

export const StyledSpinner = styled('svg')`
  ${createStyles()};
`;
