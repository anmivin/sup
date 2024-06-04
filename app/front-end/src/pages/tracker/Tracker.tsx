/* import { Layer, Rect, Stage, Text } from 'react-konva'; */
import { Box, styled } from '@mui/material';

import { RatingFilledIcon, RatingIcon, TreeIcon } from '@components/Icons';
import Spinner from '@components/Spinner';
import WorldImage from '@components/WorldImage';

import DownTown from './Downtown.webp';
import fifth from './oasis/fifth.png';
import first from './oasis/first.png';
import fourth from './oasis/fourth.png';
import second from './oasis/second.png';
import third from './oasis/third.png';

/* import Konva from 'konva'; */

const Tracker = () => {
  /*  const [color, setColor] = useState('green');

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  const calc = (width: number, height: number) => {
    const arr = [];

    for (let w = 1; w <= width; w++) {
      for (let h = 1; h <= height; h++) {
        arr.push({ x: w * 20, y: h * 20 });
      }
    }

    return arr;
  }; */

  return (
    <>
      <WorldImage image={{ first, second, third, fourth, fifth }} />
      <WorldImage image={DownTown} />
      {/*   <Box
        style={{
          display: 'grid',
          placeItems: 'center',
          gridTemplateAreas: 'inner-div',
          backgroundColor: 'red',
          width: '512px',
          height: '512px',
          clipPath: 'circle(190px at 256px 256px)',
        }}
      >
        <StyledBox img={fifth} />
        <StyledBox img={fourth} speed={14} />
        <StyledBox img={third} speed={12} />
        <StyledBox img={second} speed={10} />
        <StyledBox img={first} speed={8} />
      </Box> */}

      {/*  <img src={first} />
      <img src={second} />
      <img src={third} />
      <img src={fourth} />
      <img src={fives} /> */}
      {/*       <Spinner />
      <RatingFilledIcon />
      <RatingIcon />
      <TreeIcon /> */}
      {/*  <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {calc(10, 10).map((rec, index) => (
            <Rect
              key={index}
              x={rec.x}
              y={rec.y}
              width={20}
              height={20}
              fill={color}
              stroke="black"
              onClick={handleClick}
            />
          ))}
        </Layer>
      </Stage> */}
    </>
  );
};
export default Tracker;
