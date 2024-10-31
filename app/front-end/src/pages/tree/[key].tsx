import { Button } from '@mui/material';
import { useStore } from 'zustand';

import TreeComponent from '@widgets/Tree';

import SimDrawer from '@features/SimDrawer';

import { CommonStore } from '@stores/Common/Common.store';
import { HandbookStore } from '@stores/Handbook/Handbook.store';

HandbookStore.getState().getAspirations();
HandbookStore.getState().getSkills();
HandbookStore.getState().getTraits();
const Tree = () => {
  const { simDrawerType, isSimDrawerOpen, setIsSimDrawerOpen } = useStore(CommonStore);

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
      <Button onClick={() => setIsSimDrawerOpen(true)}>СОЗДАТЬ</Button>
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
      {isSimDrawerOpen && (
        <SimDrawer
          simsInTree={/* simsInTree ?? */ []}
          type={simDrawerType}
          onCloseModal={() => setIsSimDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Tree;
