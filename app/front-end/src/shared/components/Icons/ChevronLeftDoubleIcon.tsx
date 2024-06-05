import IconWrapper, { IconProps } from '@components/IconWrapper';

const ChevronLeftDoubleIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M18 17L13 12L18 7M11 17L6 12L11 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronLeftDoubleIcon;
