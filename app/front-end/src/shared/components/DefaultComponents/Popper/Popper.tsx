import { ForwardedRef, ReactElement, forwardRef, useState } from 'react';

import { ClickAwayListener, Grow, Popper as MuiPopper } from '@mui/material';

import { StyledPopperPaper } from '@components/DefaultComponents/Popper/Popper.styled';

import { BasePopperProps, PopperProps } from './Popper.types';

export const BasePopper = forwardRef<HTMLDivElement, BasePopperProps>(
  (
    {
      open,
      children,
      placement = 'top',
      anchorEl,
      container,
      modifiers,
      flip = true,
      preventOverflow = true,
      arrowRef,
      ...rest
    }: BasePopperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <MuiPopper
        {...rest}
        ref={ref}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        sx={{ ...(rest.sx || {}), zIndex: (rest.sx as any)?.zIndex || 100 }}
        transition
        modifiers={
          modifiers || [
            {
              name: 'flip',
              enabled: flip,
              options: {
                altBoundary: true,
                rootBoundary: container || 'document',
                padding: 8,
              },
            },
            {
              name: 'preventOverflow',
              enabled: preventOverflow,
              options: {
                altAxis: true,
                altBoundary: true,
                tether: false,
                rootBoundary: container || 'document',
                padding: 8,
              },
            },
            {
              name: 'arrow',
              enabled: Boolean(arrowRef),
              options: {
                element: arrowRef,
              },
            },
            {
              name: 'offset',
              options: {
                offset: [0, 6],
              },
            },
          ]
        }
      >
        {children}
      </MuiPopper>
    );
  },
);

export const Popper = forwardRef<HTMLDivElement, PopperProps>(
  ({ children, onClose, arrow = true, ...rest }: PopperProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);

    return (
      <BasePopper {...rest} ref={ref} arrowRef={arrowRef || undefined}>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={(e) => onClose?.(e)}>
            <Grow {...TransitionProps} timeout={200}>
              <StyledPopperPaper>
                {arrow ? <span className="arrow" ref={setArrowRef} /> : null}
                {children as ReactElement}
              </StyledPopperPaper>
            </Grow>
          </ClickAwayListener>
        )}
      </BasePopper>
    );
  },
);

BasePopper.displayName = 'BasePopper';
Popper.displayName = 'Popper';
export default Popper;
