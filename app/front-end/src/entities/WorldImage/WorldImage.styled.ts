import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  display: grid;
  place-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 2px 2px black;
  cursor: pointer;
`;

export const AnimatedBox = styled(Box)<{ $img: string; $speed?: number }>`
  grid-column: 1;
  grid-row: 1;
  width: 300px;
  height: 300px;
  background-image: ${({ $img }) => `url(${$img})`};
  background-size: cover;
  border-radius: 50%;
  background-repeat: repeat-x;
  animation: ${({ $speed }) => ($speed ? `move ${$speed}s linear infinite` : undefined)};
  animation-play-state: paused;
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 300px 0;
    }
  }
`;

export const StyledBox = styled(Box)<{ $img: string }>`
  width: 300px;
  height: 200px;
  background-image: ${({ $img }) => `url(${$img})`};
  background-size: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  box-shadow:
    0 0 2px 2px black,
    inset 0 0 3px 3px white;
  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
  }
`;
