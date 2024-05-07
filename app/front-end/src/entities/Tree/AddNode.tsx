import { FC } from 'react';
import { NodeProps } from 'reactflow';

import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';

import { InnerIconButtom, StyledIconButton } from './TreeComponent.styled';

interface NodeData {
  name: string;
  onClick: () => void;
}

const AddNode: FC<NodeProps<NodeData>> = ({ data }) => {
  return (
    <Tooltip title={data.name}>
      <StyledIconButton>
        <InnerIconButtom onClick={data.onClick}>
          <AddIcon fontSize="large" />
        </InnerIconButtom>
      </StyledIconButton>
    </Tooltip>
  );
};

export default AddNode;
