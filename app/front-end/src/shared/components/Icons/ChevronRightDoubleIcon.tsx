import IconWrapper, { IconComponent } from '@components/IconWrapper';

const ChevronRightDoubleIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronRightDoubleIcon;
