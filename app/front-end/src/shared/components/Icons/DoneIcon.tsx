import IconWrapper, { IconComponent } from '@components/IconWrapper';

const DoneIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M20 6L9 17L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default DoneIcon;
