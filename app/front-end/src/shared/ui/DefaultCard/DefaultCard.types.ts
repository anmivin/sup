interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface DefaultCardProps {
  label: string;
  description?: string;
  image?: ImageProps;
  width?: number;
}
