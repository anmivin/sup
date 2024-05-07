/* import { Layer, Rect, Stage, Text } from 'react-konva'; */
import { RatingFilledIcon, RatingIcon, TreeIcon } from '@components/Icons';
import Spinner from '@components/Spinner';

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
      <Spinner />
      <RatingFilledIcon />
      <RatingIcon />
      <TreeIcon />
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
