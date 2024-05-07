import IconWrapper, { IconComponent } from '@components/IconWrapper';

const ChevronVerticalIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M7 15L12 20L17 15M7 9L12 4L17 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default ChevronVerticalIcon;
