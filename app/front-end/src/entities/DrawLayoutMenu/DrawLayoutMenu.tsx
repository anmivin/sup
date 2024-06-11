import { CursorIcon, EditIcon, EraserIcon } from '@ui/Icons';

import { StyledBox, StyledButton } from './DrawLayoutMenu.styled';

import { DrawLayoutMenuProps, MODE, objectSizes } from './DrawLayoutMenu.types';

const DrawLayoutMenu = ({ onAdd, onChangeMode }: DrawLayoutMenuProps) => {
  return (
    <StyledBox>
      <StyledButton onClick={() => onChangeMode(MODE.default)}>
        <CursorIcon />
      </StyledButton>
      <StyledButton onClick={() => onChangeMode(MODE.draw)}>
        <EditIcon />
      </StyledButton>
      <StyledButton onClick={() => onChangeMode(MODE.erase)}>
        <EraserIcon />
      </StyledButton>
      {objectSizes.map((item, index) => (
        <StyledButton key={index} onClick={() => onAdd({ x: item.x, y: item.y })}>{`${item.x}x${item.y}`}</StyledButton>
      ))}
    </StyledBox>
  );
};

export default DrawLayoutMenu;
