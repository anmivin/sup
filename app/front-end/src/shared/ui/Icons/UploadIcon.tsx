import IconWrapper, { IconProps } from '@ui/IconWrapper';

const UploadIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path
        d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
};

export default UploadIcon;
