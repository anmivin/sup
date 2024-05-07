import IconWrapper, { IconComponent } from '@components/IconWrapper';

const ChevronUpDoubleIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M17 18L12 13L7 18M17 11L12 6L7 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronUpDoubleIcon;
