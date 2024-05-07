import IconWrapper, { IconComponent } from '@components/IconWrapper';

const ChevronDownIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronDownIcon;
