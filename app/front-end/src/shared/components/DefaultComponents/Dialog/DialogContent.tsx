import { UIEvent, forwardRef, useCallback, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

import { debounce } from 'lodash';

import { StyledMuiDialogContent } from './Dialog.styled';

import { DialogContentImperativeHandler, DialogContentProps } from './Dialog.types';

export const DialogContent = forwardRef<DialogContentImperativeHandler, DialogContentProps>(
  ({ onScroll, showScrollBorders, ...rest }, ref) => {
    const localRef = useRef<DialogContentImperativeHandler>(null);
    const [borders, setBorders] = useState([0, 0]);

    const checkBorders = useCallback(() => {
      if (showScrollBorders && localRef.current) {
        if (localRef.current.scrollHeight > localRef.current.clientHeight) {
          setBorders([
            localRef.current.scrollTop ? 1 : 0,
            localRef.current.offsetHeight + localRef.current.scrollTop < localRef.current.scrollHeight ? 1 : 0,
          ]);
        } else {
          setBorders([0, 0]);
        }
      }
    }, [showScrollBorders]);

    useImperativeHandle(ref, () => ({
      ...(localRef.current! || {}),
      checkBorders,
    }));

    const handleScroll = useCallback(
      debounce((e: UIEvent<HTMLDivElement>) => {
        onScroll?.(e);
        checkBorders();
      }),
      [checkBorders, onScroll],
    );

    useLayoutEffect(() => {
      checkBorders();
    }, [checkBorders]);

    return (
      <StyledMuiDialogContent
        ref={localRef /* mergeRefs([ref, localRef]) */}
        onScroll={handleScroll}
        {...rest}
        data-test-id="DialogContent"
        sx={(theme) => ({
          borderTopColor: borders[0] && theme.color.monoA100,
          borderBottomColor: borders[1] && theme.color.monoA100,
        })}
      />
    );
  },
);
