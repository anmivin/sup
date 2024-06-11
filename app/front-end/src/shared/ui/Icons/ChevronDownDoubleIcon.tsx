import IconWrapper, { IconProps } from '@ui/IconWrapper';

const ChevronDownDoubleIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronDownDoubleIcon;
