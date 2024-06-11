import IconWrapper, { IconProps } from '@ui/IconWrapper';

const HeartBrokenIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path
        d="M 12 6.0001 L 14 10 L 10 12 L 13 17 M 12 6.0001 C 10.2006 3.9031 7.1938 3.2551 4.9392 5.1754 C 2.6847 7.0956 2.3673 10.3062 4.1378 12.5772 C 5.6098 14.4655 10.0648 18.4479 11.5249 19.7369 C 11.6882 19.8811 11.7699 19.9532 11.8652 19.9816 C 11.9483 20.0063 12.0393 20.0063 12.1225 19.9816 C 12.2178 19.9532 12.2994 19.8811 12.4628 19.7369 C 13.9229 18.4479 18.3778 14.4655 19.8499 12.5772 C 21.6204 10.3062 21.3417 7.0754 19.0484 5.1754 C 16.7551 3.2753 13.7994 3.9031 12 6.0001 Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
};

export default HeartBrokenIcon;
