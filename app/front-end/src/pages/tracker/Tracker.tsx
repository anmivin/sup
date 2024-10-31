import WorldImage from '@entities/WorldImage';

import DownTown from './Downtown.webp';
import fifth from './oasis/fifth.png';
import first from './oasis/first.png';
import fourth from './oasis/fourth.png';
import second from './oasis/second.png';
import third from './oasis/third.png';

const Tracker = () => {
  return (
    <>
      <WorldImage image={{ first, second, third, fourth, fifth }} />
      <WorldImage image={DownTown} />
    </>
  );
};
export default Tracker;
