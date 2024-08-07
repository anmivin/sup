import { Box, Button, Link, Typography, styled } from '@mui/material';
import { useStore } from 'zustand';

import TreeDrawer from '@features/TreeDrawer';

import { CommonStore } from '@stores/Common/Common.store';
import { TreeStore } from '@stores/Tree/Tree.store';

import { PlusIcon } from '@assets/icons';

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

TreeStore.getState().getTreesForUser();
const Trees = () => {
  const { trees, treesPending } = TreeStore();
  const { isTreeDrawerOpen, setIsTreeDrawerOpen, treeDrawerType } = useStore(CommonStore);
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
      <Button onClick={() => setIsTreeDrawerOpen(true)}>
        <StyledBox>
          <PlusIcon width={60} height={60} />
        </StyledBox>
      </Button>

      {isTreeDrawerOpen && <TreeDrawer type={treeDrawerType} onCloseModal={() => setIsTreeDrawerOpen(false)} />}
    </Box>
  );
};

export default Trees;
