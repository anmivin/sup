import { GAME_PARTS } from '@constants/enums';

interface layeredImages {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}
export interface WorldImageProps<T extends GAME_PARTS> {
  image: T extends GAME_PARTS.Four ? layeredImages : string;
}
