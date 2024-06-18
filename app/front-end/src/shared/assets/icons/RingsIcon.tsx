import IconWrapper, { IconWrapperProps } from '@ui/IconWrapper';

const RingsIcon = (props: IconWrapperProps) => {
  return (
    <IconWrapper {...props}>
      <path d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" />
      <path d="M15 22C18.866 22 22 18.866 22 15C22 11.134 18.866 8 15 8C11.134 8 8 11.134 8 15C8 18.866 11.134 22 15 22Z" />
    </IconWrapper>
  );
};

export default RingsIcon;
