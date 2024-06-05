import IconWrapper, { IconProps } from '@components/IconWrapper';

const ChevronRight = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M9 18L15 12L9 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronRight;
