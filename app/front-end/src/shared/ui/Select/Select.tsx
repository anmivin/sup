import { ReactElement, Ref, forwardRef, useEffect, useMemo, useState } from 'react';

import { ListItemText } from '@mui/material';

import Radio from '@ui/Radio';

import { StyledSelect } from './Select.styled';

import { SelectProps } from './Select.types';

import MenuItem from '../Menu/MenuItem';

const ITEM_HEIGHT = 32; //высота пункта меню
const ITEM_PADDING_TOP = 8; // верхний паддинг
const VIEWABLE_ITEMS_AMOUNT = 10.5; // сколько пунктов видно максимально (лучше прибавлять 0.5 для понимания возможности скрола

type GenPaperProps = {
  itemHeight?: number;
  padding?: number;
  viewableItemsAmount?: number;
  width?: number;
};

export const genPaperProps = ({
  itemHeight = ITEM_HEIGHT,
  padding = ITEM_PADDING_TOP,
  viewableItemsAmount = VIEWABLE_ITEMS_AMOUNT,
  width,
}: GenPaperProps) => {
  // макс. высота окошка расчитана из того, чтобы влезало 4 пункта меню и половина следующего, чтобы пользователь понимал, что можно проскролить.
  const popoverMaxHeight = itemHeight * viewableItemsAmount + padding;
  return {
    PaperProps: {
      style: {
        maxHeight: `min(calc(100% - 32px), ${popoverMaxHeight}px)`,
        width,
      },
    },
  };
};

const DefaultMenuProps = genPaperProps({});

const SelectForward = <T,>(
  { value, children, options, showRadios, MenuProps = DefaultMenuProps, ...rest }: SelectProps<T>,
  ref: Ref<unknown>,
) => {
  const [optionsMap, setOptionsMap] = useState<Record<string, T & { id: string; name: string }> | null>(null);

  useEffect(() => {
    if (options?.length) {
      const newOptionsObject = options.reduce((a, v) => ({ ...a, [String(v.id)]: v }), {});
      setOptionsMap((state) => ({ ...(state || {}), ...newOptionsObject }));
    }
  }, [options]);

  const menuOptions = useMemo(
    () =>
      (options || []).map(({ id, name }) => (
        <MenuItem value={id} key={id}>
          {showRadios ? (
            <>
              <Radio checked={value === id} />
              <ListItemText primary={name} />
            </>
          ) : (
            name
          )}
        </MenuItem>
      )),
    [value, options],
  );

  return (
    <StyledSelect
      ref={ref}
      data-test-id="Select"
      MenuProps={MenuProps}
      value={value}
      renderValue={optionsMap ? (id) => optionsMap[id as string].name : undefined}
      {...rest}
    >
      {children}
      {menuOptions}
    </StyledSelect>
  );
};

const Select = forwardRef(SelectForward) as <T>(p: SelectProps<T> & { ref?: Ref<unknown> }) => ReactElement;

// @ts-expect-error displayName not exist in forwardRef, but it need for story name
Select.displayName = 'Select';
export default Select;
