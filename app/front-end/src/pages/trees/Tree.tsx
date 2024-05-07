import { useCallback, useEffect, useState } from 'react';

import { Box, styled } from '@mui/material';
import TreeComponent from '@widgets/Tree';

import CreateSimDrawer from '@entities/CreateSimDrawer';
import TreeDrawer from '@entities/TreeDrawer';

import DefaultButton from '@components/DefaultButton';

import { TreeStore } from '@stores/Handbook/Handbook.store';

/* import {
  fetchAspirations,
  fetchSimsForTree,
  fetchSimsForUser,
  fetchSkills,
  fetchTraits,
} from '@front/fetchers/fetchers';
import { useFetcher } from '@front/fetchers/useFetch';
import useModal from '@front/helpers/useModal'; */

TreeStore.getState().getAspirations();
TreeStore.getState().getSkills();
TreeStore.getState().getTraits();
const Tree = () => {
  /*   const { data: sims } = useFetcher(fetchSimsForTree, [1]);
  const { data: simsInTree } = useFetcher(fetchSimsForUser, [1]);
  const { data: aspirations } = useFetcher(fetchAspirations);
  const { data: skills } = useFetcher(fetchSkills);
  const { data: traits } = useFetcher(fetchTraits); */

  const [showTreeDrawer, setShowTreeDrawer] = useState(false);
  const [showSimDrawer, setShowSimDrawer] = useState(false);
  /*   const [type, setType] = useState(false); */

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
      <DefaultButton onClick={async () => setShowSimDrawer(true)}>СОЗДАТЬ</DefaultButton>
      <DefaultButton onClick={async () => setShowTreeDrawer(true)}>СОЗДАТЬ ДЕРЕВО</DefaultButton>
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
          type="create"
          onCloseModal={() => setShowSimDrawer(false)}
        />
      )}
      {showTreeDrawer && <TreeDrawer onCloseModal={() => setShowTreeDrawer(false)} />}
    </>
  );
};

export default Tree;
