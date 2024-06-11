import IconWrapper, { IconProps } from '@ui/IconWrapper';

const TreeIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path
        d="M 12 10 L 12 17 M 4 17 C 2.75 17 1.5 18.25 1.5 19.5 C 1.5 20.75 2.75 22 4 22 C 5.25 22 6.5 20.75 6.5 19.5 C 6.5 18.25 5.25 17 4 17 M 20 17 C 21.25 17 22.5 18.25 22.5 19.5 C 22.5 20.75 21.25 22 20 22 C 18.75 22 17.5 20.75 17.5 19.5 C 17.5 18.25 18.75 17 20 17 M 12 17 C 10.75 17 9.5 18.25 9.5 19.5 C 9.5 20.75 10.75 22 12 22 C 13.25 22 14.5 20.75 14.5 19.5 C 14.5 18.25 13.25 17 12 17 M 16 7 C 14.5 7 13.5 5.75 13.5 4.5 C 13.5 3.25 14.75 2 16 2 C 17.25 2 18.5 3.25 18.5 4.5 C 18.5 5.75 17.25 7 16 7 M 8 7 C 6.75 7 5.5 5.75 5.5 4.5 C 5.5 3.25 6.75 2 8 2 C 9.25 2 10.5 3.25 10.5 4.5 C 10.5 5.75 9.25 7 8 7 M 8 7 L 8 8 C 8 9.5 8.5 10 10 10 L 14 10 C 15.5 10 16 9.5 16 8 L 16 7 M 4 17 L 4 16 C 4 14.5 4.5 14 6 14 L 18 14 C 19.5 14 20 14.5 20 16 L 20 17"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
};

export default TreeIcon;
