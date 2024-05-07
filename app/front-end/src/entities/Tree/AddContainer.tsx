import AddIcon from '@mui/icons-material/Add';
import { Box, Tooltip } from '@mui/material';

import { InnerIconButtom, Invis, StyledAddContainer, StyledIconButton } from './TreeComponent.styled';

const AddContainer = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledAddContainer onMouseLeave={onClick}>
      <Tooltip title="Добавить родителя">
        <StyledIconButton>
          <InnerIconButtom onClick={() => console.log('1')}>
            <AddIcon fontSize="large" />
          </InnerIconButtom>
        </StyledIconButton>
      </Tooltip>

      <Box display="flex" flexDirection="row" gap={4} alignItems="center">
        <Tooltip title="Добавить партнера">
          <StyledIconButton>
            <InnerIconButtom onClick={() => console.log('2')}>
              <AddIcon fontSize="large" />
            </InnerIconButtom>
          </StyledIconButton>
        </Tooltip>
        <Invis onClick={onClick} />
        <Tooltip title="Добавить партнера">
          <StyledIconButton>
            <InnerIconButtom onClick={() => console.log('3')}>
              <AddIcon fontSize="large" />
            </InnerIconButtom>
          </StyledIconButton>
        </Tooltip>
      </Box>
      <Tooltip title="Добавить ребенка">
        <StyledIconButton>
          <InnerIconButtom onClick={() => console.log('4')}>
            <AddIcon fontSize="large" />
          </InnerIconButtom>
        </StyledIconButton>
      </Tooltip>
    </StyledAddContainer>
  );
};

export default AddContainer;
