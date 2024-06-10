import { ForwardedRef, MouseEvent, cloneElement, forwardRef, useState } from 'react';

import _ from 'lodash';

import { StyledPopover } from './Popover.styled';
import { PopoverProps } from './Popover.types';

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, content, onClose, ...rest }: PopoverProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [id] = useState(rest.id || _.uniqueId());
    const handleClose: PopoverProps['onClose'] = (e, reason) => {
      onClose?.(e, reason);
      setAnchorEl(null);
    };

    const open = rest.open ?? Boolean(anchorEl);
    const describedId = open ? id : undefined;
    return (
      <>
        {children &&
          cloneElement(children, {
            'aria-describedby': describedId,
            onClick: (e: MouseEvent<HTMLButtonElement>) => {
              children.props.onClick?.(e);
              setAnchorEl(e.currentTarget);
            },
          })}

        <StyledPopover
          {...rest}
          ref={ref}
          id={describedId}
          open={open}
          anchorEl={rest.anchorEl || anchorEl}
          onClose={handleClose}
        >
          {content}
        </StyledPopover>
      </>
    );
  }
);

Popover.displayName = 'Popover';
export default Popover;
