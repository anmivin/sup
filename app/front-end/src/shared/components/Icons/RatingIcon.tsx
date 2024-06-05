import IconWrapper, { IconProps } from '@components/IconWrapper';

const RatingIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path
        d="M 11 23 C 9 23 7 21 7 19 V 5 C 7 3 9 1 11 1 H 13 C 15 1 17 3 17 5 V 19 C 17 21 15 23 13 23 H 11 Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
};

export default RatingIcon;
