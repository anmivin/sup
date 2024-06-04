import {
  Children,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { mergeRefs } from 'react-merge-refs';

import Chip from '@components/DefaultComponents/Chip';

import * as S from './ChipList.styled';

import { ChipListProps } from './ChipList.types';

const ROW_HEIGHT = 32;

export const ChipList = forwardRef<unknown, ChipListProps>(({ children, rows = 2, ...rest }: ChipListProps, ref) => {
  const [hiddenCount, setHiddenCount] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const localRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const currentChildrenArray = localRef.current?.children;
    if (currentChildrenArray?.length && localRef.current?.clientHeight) {
      let hiddenElementIndex = 0;
      let hasHiddenCountElement = false;
      for (let i = currentChildrenArray.length - 1; i >= 0; i--) {
        const child = currentChildrenArray[i] as HTMLElement;

        if (child.classList.contains('hiddenCount')) {
          hasHiddenCountElement = true;
        } else if (child.offsetTop > localRef.current.clientHeight) {
          hiddenElementIndex = i;
        }
      }
      if (hiddenElementIndex) {
        setHiddenCount(currentChildrenArray.length - hiddenElementIndex - (hasHiddenCountElement ? 1 : 0));
        setVisibleCount(hiddenElementIndex);
      } else {
        setHiddenCount(0);
      }
    }
  }, [rows, children, localRef]);

  return (
    <S.ChipList
      data-test-id="ChipList"
      ref={mergeRefs([ref, localRef])}
      {...rest}
      sx={{ maxHeight: rows * ROW_HEIGHT }}
    >
      {Children.map(children, (child, i) => {
        if (!isValidElement<ReactElement>(child)) {
          return child;
        }
        return <S.ListItem style={{ order: i }}>{cloneElement(child)}</S.ListItem>;
      })}
      {hiddenCount > 0 && (
        <S.ListItem className="hiddenCount" style={{ order: visibleCount - 1 }} data-test-id="ChipListHiddenCount">
          <Chip>+{hiddenCount}</Chip>
        </S.ListItem>
      )}
    </S.ChipList>
  );
});

ChipList.displayName = 'ChipList';
export default ChipList;
