import IconWrapper, { IconProps } from '@components/IconWrapper';

const ChevronLeftIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M15 18L9 12L15 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronLeftIcon;
