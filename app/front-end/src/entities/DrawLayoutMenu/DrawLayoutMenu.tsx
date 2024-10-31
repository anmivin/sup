import { CursorIcon, EditIcon, EraserIcon } from '@assets/icons';

import { StyledBox, StyledButton } from './DrawLayoutMenu.styled';

import { DrawLayoutMenuProps, MODE, objectSizes } from './DrawLayoutMenu.types';

const DrawLayoutMenu = ({ onAdd, onChangeMode, currentMode }: DrawLayoutMenuProps) => {
  return (
    <StyledBox>
      <StyledButton $active={currentMode === MODE.default} onClick={() => onChangeMode(MODE.default)}>
        <CursorIcon />
      </StyledButton>
      <StyledButton $active={currentMode === MODE.draw} onClick={() => onChangeMode(MODE.draw)}>
        <EditIcon />
      </StyledButton>
      <StyledButton $active={currentMode === MODE.erase} onClick={() => onChangeMode(MODE.erase)}>
        <EraserIcon />
      </StyledButton>
      {objectSizes.map((item, index) => (
        <StyledButton
          $active={false}
          key={index}
          onClick={() => onAdd({ x: item.x, y: item.y })}
        >{`${item.x}x${item.y}`}</StyledButton>
      ))}
    </StyledBox>
  );
};

export default DrawLayoutMenu;
