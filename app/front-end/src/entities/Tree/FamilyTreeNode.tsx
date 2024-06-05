import { Handle, NodeProps, Position } from 'reactflow';

import { Box, Typography } from '@mui/material';

import DefaultContextMenu from '@components/DefaultContextMenu';

import { Settings } from '@constants/icons';

import { Circle, TheBox } from './TreeComponent.styled';

interface NodeData {
  name: string;
  onClick: () => void;
}

const FamilyTreeNode = ({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <>
      <Handle id="top" type="target" position={Position.Top} isConnectable={isConnectable} />
      <Handle id="left" type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle id="right" type="target" position={Position.Right} isConnectable={isConnectable} />
      <Handle id="bottom" type="source" position={Position.Bottom} isConnectable={isConnectable} />
      <Handle id="right" type="source" position={Position.Right} isConnectable={isConnectable} />
      <Handle id="left" type="source" position={Position.Left} isConnectable={isConnectable} />

      <Box display="flex" flexDirection="row" gap={0.5} alignItems="center">
        <TheBox>
          <Box mt={1} width="85px" height="85px" sx={{ backgroundColor: 'blue' }}></Box>

          <Circle>
            <DefaultContextMenu
              icon={<Settings color="warning" />}
              items={[
                { label: 'Редактировать', onClick: () => {} },
                { label: 'Добавить ребёнка', onClick: () => {} },
                { label: 'Добавить партнёра', onClick: () => {} },
                { label: 'Добавить родителя', onClick: () => {} },
              ]}
            />
          </Circle>

          <Typography>{data.name} </Typography>
        </TheBox>
      </Box>
    </>
  );
};

export default FamilyTreeNode;
