import { useCallback, useEffect, useState } from 'react';

import { Box, Button, Link, Typography, styled } from '@mui/material';

import TreeComponent from '@widgets/Tree';

import CreateSimDrawer from '@features/CreateSimDrawer';

import { HandbookStore } from '@stores/Handbook/Handbook.store';
import { TreeStore } from '@stores/Tree/Tree.store';

/* HandbookStore.getState().getAspirations();
HandbookStore.getState().getSkills();
HandbookStore.getState().getTraits(); */
TreeStore.getState().getTreesForUser();
const Tree = () => {
  const [showTreeDrawer, setShowTreeDrawer] = useState(false);
  const [showSimDrawer, setShowSimDrawer] = useState(false);
  const { simDrawerType, treeDrawerType, trees, treesPending } = TreeStore();

  const initNode = {
    id: 'init-node',
    position: { x: 0, y: 0 },
    data: {
      name: 'asd',
    },
    type: 'simNode',
  };

  if (treesPending) return <>Loading</>;

  return (
    <>
      <Button onClick={async () => setShowSimDrawer(true)}>СОЗДАТЬ</Button>

      {/*  {sims && ( */}
      <TreeComponent
        initialEdges={
          [] /* sims.edges.map((edge) => {
          return { ...edge, type: 'smoothstep', style: { stroke: 'blue', strokeWidth: 3 } };
        }) */
        }
        initialNodes={
          [initNode] /* sims.nodes.map((node) => {
          return {
            ...node,
            data: {
              ...node.data,
              showDrawer: setShowSimDrawer,
            },
          };
        }) */
        }
      />
      {/*       )} */}
      {showSimDrawer && (
        <CreateSimDrawer
          simsInTree={/* simsInTree ?? */ []}
          type={simDrawerType}
          onCloseModal={() => setShowSimDrawer(false)}
        />
      )}
    </>
  );
};

export default Tree;
