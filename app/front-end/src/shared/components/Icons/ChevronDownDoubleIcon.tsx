import IconWrapper, { IconComponent } from '@components/IconWrapper';

const ChevronDownDoubleIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronDownDoubleIcon;
