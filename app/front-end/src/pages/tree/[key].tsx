import { useCallback, useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { useStore } from 'zustand';

import TreeComponent from '@widgets/Tree';

/* 
import Button from '@ui/Button'; */
import SimDrawer from '@features/SimDrawer';
import TreeDrawer from '@features/TreeDrawer';

import { CommonStore } from '@stores/Common/Common.store';
import { HandbookStore } from '@stores/Handbook/Handbook.store';

HandbookStore.getState().getAspirations();
HandbookStore.getState().getSkills();
HandbookStore.getState().getTraits();
const Tree = () => {
  const [showTreeDrawer, setShowTreeDrawer] = useState(false);
  const [showSimDrawer, setShowSimDrawer] = useState(false);
  const { simDrawerType, treeDrawerType } = useStore(CommonStore);

  const initNode = {
    id: 'init-node',
    position: { x: 0, y: 0 },
    data: {
      name: 'asd',
    },
    type: 'simNode',
  };

  return (
    <>
      <Button onClick={async () => setShowSimDrawer(true)}>СОЗДАТЬ</Button>
      <Button onClick={async () => setShowTreeDrawer(true)}>СОЗДАТЬ ДЕРЕВО</Button>
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
      {showTreeDrawer && <TreeDrawer type={treeDrawerType} onCloseModal={() => setShowTreeDrawer(false)} />}
    </>
  );
};

export default Tree;
