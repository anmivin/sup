import { FC, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { Box, Tooltip, Typography } from '@mui/material';
import { IconButton } from '@mui/material';

import { Circle, TheBox } from './TreeComponent.styled';

import AddContainer from './AddContainer';

interface NodeData {
  name: string;
  onClick: () => void;
}

const FamilyTreeNode: FC<NodeProps<NodeData>> = ({ data, isConnectable }) => {
  const [showPlus, setShowPlus] = useState(false);
  return (
    <>
      <Handle id="top" type="target" position={Position.Top} isConnectable={isConnectable} />
      <Handle id="left" type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle id="right" type="target" position={Position.Right} isConnectable={isConnectable} />
      <Handle id="bottom" type="source" position={Position.Bottom} isConnectable={isConnectable} />
      <Handle id="right" type="source" position={Position.Right} isConnectable={isConnectable} />
      <Handle id="left" type="source" position={Position.Left} isConnectable={isConnectable} />
      {showPlus && <AddContainer onClick={() => setShowPlus(false)} />}
      <Box display="flex" flexDirection="row" gap={0.5} alignItems="center" onMouseEnter={() => setShowPlus(true)}>
        <TheBox>
          <Box mt={1} width="85px" height="85px" sx={{ backgroundColor: 'blue' }}></Box>
          <Tooltip title="Редактировать">
            <Circle>
              <IconButton onClick={data.onClick}>
                <BuildCircleIcon color="primary" />
              </IconButton>
            </Circle>
          </Tooltip>
          <Typography>{data.name} </Typography>
        </TheBox>
      </Box>
    </>
  );
};

export default FamilyTreeNode;
