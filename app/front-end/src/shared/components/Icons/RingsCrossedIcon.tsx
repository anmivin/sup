import IconWrapper, { IconComponent } from '@components/IconWrapper';

const RingsCrossedIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path
        d="M 12 8 C 7 8 5 12 5 15 C 5 19 8 22 12 22 C 16 22 19 19 19 15 C 19 11 16 8 12 8 L 8 4 L 10 2 L 14 2 L 16 4 L 12 8 M 2 4 L 22 22"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
};

export default RingsCrossedIcon;
