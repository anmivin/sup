import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  NodeChange,
  addEdge,
  applyNodeChanges,
  useEdgesState,
  useNodesState,
  useReactFlow,
  useViewport,
} from 'reactflow';

import { Switch } from '@mui/material';

import AddNode from '@entities/TreeComponents/AddNode';
import FamilyTree from '@entities/TreeComponents/FamilyTreeEdge';
import FamilyTreeNode from '@entities/TreeComponents/FamilyTreeNode';
import InvisibleNode from '@entities/TreeComponents/InvisibleNode';
import { StyledBox } from '@entities/TreeComponents/TreeComponent.styled';
import { TreeSDto } from '@entities/TreeComponents/TreeComponent.types';

const nodeTypes = { simNode: FamilyTreeNode, invisibleNode: InvisibleNode, addNode: AddNode };
const edgeTypes = {
  simEdge: FamilyTree,
};

const TreeComponent = ({ initialNodes, initialEdges }: TreeSDto) => {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setNodes(initialNodes);
  }, [initialNodes]);

  useEffect(() => {
    setEdges(initialEdges);
  }, [initialNodes]);

  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => {
      const parsedChanges = changes.map((change) => {
        if (change.type === 'position' && change.position && change.positionAbsolute) {
          const fixedY = nds.find((node) => change.id === node.id)?.data.fixedY;
          const fixedX = nds.find((node) => change.id === node.id)?.data.fixedX;
          if (fixedY) {
            change.position = { x: fixedX ?? change.position.x, y: fixedY };
            change.positionAbsolute = {
              x: fixedX ?? change.positionAbsolute.x,
              y: fixedY,
            };
          }
        }

        return change;
      });

      return applyNodeChanges(parsedChanges, nds);
    });
  }, []);
  const { zoomTo, fitView } = useReactFlow();
  const { zoom } = useViewport();

  return (
    <StyledBox>
      <Controls showZoom={false} showFitView={false} showInteractive={false}>
        <Switch
          onChange={(e) => setIsEditable(e.target.checked)}
          /*             checkedIcon={<DarkModeIcon color="primary" />}
            icon={<WbSunnyIcon color="primary" />} */
          checked={isEditable}
        />
      </Controls>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={() => {}}
        onNodeMouseEnter={() => {}}
        fitView
        /*         edgeTypes={edgeTypes} */
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
      >
        {/*    <Background size={0} style={{ backgroundColor: '#fff' }} /> */}
      </ReactFlow>
    </StyledBox>
  );
};

export default TreeComponent;
