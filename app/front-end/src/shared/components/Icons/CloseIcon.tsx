import IconWrapper, { IconProps } from '@components/IconWrapper';

const CloseIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M18 6L6 18M6 6L18 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
  );
};

export default CloseIcon;
