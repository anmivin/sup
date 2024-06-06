import IconWrapper, { IconProps } from '@components/IconWrapper';

const ChevronUpIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M18 15L12 9L6 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronUpIcon;
