import IconWrapper, { IconComponent } from '@components/IconWrapper';

const ChevronHorizontalIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M9 7L4 12L9 17M15 7L20 12L15 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronHorizontalIcon;
