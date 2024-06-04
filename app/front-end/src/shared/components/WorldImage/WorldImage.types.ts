import { GameParts } from '@constants/enums';

interface layeredImages {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}
export interface WorldImageProps<T extends GameParts> {
  image: T extends GameParts.Four ? layeredImages : string;
}
