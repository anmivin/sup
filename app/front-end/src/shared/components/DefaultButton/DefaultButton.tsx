import { StyledButton } from './DefaultButton.styled';
import { DefaultButtonProps } from './DefaultButton.types';
const DefaultButton = ({ decor, children, ...props }: DefaultButtonProps) => {
  return (
    <StyledButton {...props} className={decor}>
      {children && <span className="buttonContent">{children}</span>}
    </StyledButton>
  );
};

export default DefaultButton;
