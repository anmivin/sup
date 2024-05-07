import { FC } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Box, styled, Typography } from '@mui/material';

interface NodeData {
  name: string;
  married: string;
}

const InvisibleNode: FC<NodeProps<NodeData>> = ({ data, isConnectable }) => {
  return (
    <>
      <Handle id="top" type="target" position={Position.Top} isConnectable={isConnectable} />
      <Handle id="left" type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle id="right" type="target" position={Position.Right} isConnectable={isConnectable} />
      <Handle id="bottom" type="source" position={Position.Bottom} isConnectable={isConnectable} />
      <Handle id="right" type="source" position={Position.Right} isConnectable={isConnectable} />
      <Handle id="left" type="source" position={Position.Left} isConnectable={isConnectable} />
      <Box display="flex" flexDirection="row" gap={0.5} alignItems="center" sx={{ backgroundColor: 'red' }}>
        <Typography>cant see me, invisible</Typography>
      </Box>
    </>
  );
};

export default InvisibleNode;
