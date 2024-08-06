import { useCallback, useEffect, useState } from 'react';

import { Box, Button, Link, Typography, styled } from '@mui/material';

import TreeComponent from '@widgets/Tree';

/* 
import Button from '@ui/Button'; */
import CreateSimDrawer from '@features/CreateSimDrawer';
import TreeDrawer from '@features/TreeDrawer';

import { HandbookStore } from '@stores/Handbook/Handbook.store';
import { TreeStore } from '@stores/Tree/Tree.store';

import { ImagePlusIcon, PlusIcon } from '@assets/icons';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  height: 280px;
  width: 300px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.transparentDark100};
  border: ${({ theme }) => `6px solid ${theme.color.primaryDark}`};
  &:hover {
    background: ${({ theme }) => theme.color.transparentDark300};
  }
`;

const StyledImageBox = styled(Box)`
  height: 160px;
  width: 100%;
  border-radius: 16px;
  border: ${({ theme }) => `1px solid ${theme.color.primaryDark}`};
`;

/* HandbookStore.getState().getAspirations();
HandbookStore.getState().getSkills();
HandbookStore.getState().getTraits(); */
TreeStore.getState().getTreesForUser();
const Trees = () => {
  const [showTreeDrawer, setShowTreeDrawer] = useState(false);
  const [showSimDrawer, setShowSimDrawer] = useState(false);
  const { simDrawerType, treeDrawerType, trees, treesPending } = TreeStore();

  if (treesPending) return <>Loading</>;

  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {trees?.map((tree) => (
        <Link href={`tree/${tree.id}`} key={tree.id} sx={{ textDecoration: 'none', cursor: 'pointer' }}>
          <StyledBox>
            <StyledImageBox />
            <Typography variant="body2">{tree.name}</Typography>
          </StyledBox>
        </Link>
      ))}
      <Button onClick={() => setShowTreeDrawer(true)}>
        <StyledBox>
          <PlusIcon width={60} height={60} />
        </StyledBox>
      </Button>

      {showSimDrawer && (
        <CreateSimDrawer
          simsInTree={/* simsInTree ?? */ []}
          type={simDrawerType}
          onCloseModal={() => setShowSimDrawer(false)}
        />
      )}
      {showTreeDrawer && <TreeDrawer type={treeDrawerType} onCloseModal={() => setShowTreeDrawer(false)} />}
    </Box>
  );
};

export default Trees;
