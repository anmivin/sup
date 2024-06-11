import IconWrapper, { IconProps } from '@ui/IconWrapper';

const RatingIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon width={16} viewBox="0 0 16 24">
      <path
        d="M 6 23 C 4 23 2 21 2 19 V 5 C 2 3 4 1 6 1 H 8 C 10 1 12 3 12 5 V 19 C 12 21 10 23 8 23 H 6 Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
};

export default RatingIcon;
