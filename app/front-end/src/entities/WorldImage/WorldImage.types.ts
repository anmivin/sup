import { GAME_PART } from '@type/enums';

interface layeredImages {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}
export interface WorldImageProps<T extends GAME_PART> {
  image: T extends GAME_PART.Four ? layeredImages : string;
}
