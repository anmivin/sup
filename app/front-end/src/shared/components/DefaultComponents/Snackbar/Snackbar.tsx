import { ForwardedRef, ReactElement, cloneElement, forwardRef, isValidElement, useMemo } from 'react';

import { ButtonProps } from '@components/DefaultComponents/Button';
import {
  AlertBlankIcon,
  AlertCheckIcon,
  AlertCloseIcon,
  AlertDotsIcon,
  AlertExclamationIcon,
  AlertHeartIcon,
  AlertInfoIcon,
  AlertPlusIcon,
  AlertQuestionIcon,
  CloseIcon,
} from '@components/Icons';

import * as S from './Snackbar.styled';

import { SnackbarProps } from './Snackbar.types';

export const SnackbarIconsMaps = {
  success: <AlertCheckIcon />,
  error: <AlertCloseIcon />,
  info: <AlertInfoIcon />,
  warning: <AlertExclamationIcon />,
  default: <AlertDotsIcon />,
};

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (
    { icon: iconProp, id, color = 'default', text, actions, onCloseSnackbar, closeButton }: SnackbarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const closeButtonObject = useMemo(
      () => closeButton && (typeof closeButton === 'object' ? closeButton : ({} as ButtonProps)),
      [closeButton],
    );
    const icon = useMemo(() => (iconProp === undefined ? SnackbarIconsMaps[color] : iconProp), [iconProp]);

    return (
      <S.Wrapper data-test-id="Snackbar" ref={ref}>
        {icon && (
          <S.Icon color={color}>
            {isValidElement(icon)
              ? cloneElement(icon as ReactElement, color !== 'default' ? { color } : undefined)
              : icon}
          </S.Icon>
        )}
        <S.Text>{text}</S.Text>
        {(actions || closeButton) && (
          <S.ButtonsWrapper>
            {actions?.map(({ isClose, children, onClick, key, ...props }, index) => (
              <S.Button
                variant="contained"
                size="medium"
                {...props}
                key={key || index}
                onClick={(e) => {
                  onClick?.(e);
                  if (isClose && onCloseSnackbar) {
                    onCloseSnackbar(id);
                  }
                }}
              >
                {children || <CloseIcon />}
              </S.Button>
            ))}
            {closeButtonObject && (
              <S.CloseButton
                variant="contained"
                size="medium"
                {...closeButtonObject}
                onClick={(e) => {
                  closeButtonObject.onClick?.(e, id);
                  onCloseSnackbar?.(id);
                }}
                key={closeButtonObject.key || 'closeButton'}
              >
                {closeButtonObject.children || <CloseIcon />}
              </S.CloseButton>
            )}
          </S.ButtonsWrapper>
        )}
      </S.Wrapper>
    );
  },
);

export default Snackbar;
