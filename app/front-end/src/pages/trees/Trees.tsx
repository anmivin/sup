import { Box, Button, Link, Typography, styled } from '@mui/material';
import { useStore } from 'zustand';

import TreeDrawer from '@features/TreeDrawer';

import { DRAWER_VARIANTS } from '@type/enums';

import { CommonStore } from '@stores/Common/Common.store';
import { TreeStore } from '@stores/Tree/Tree.store';

import { CameraOffIcon, PlusIcon } from '@assets/icons';

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
`;

const StyledImageBox = styled(Box)<{ $image: string }>`
  height: 160px;
  width: 100%;
  border-radius: 16px;
  border: ${({ theme }) => `1px solid ${theme.color.primaryDark}`};
  background-image: ${({ $image }) => `url(${$image})`};
  background-position: center center;
  background-size: cover;
`;

const NoImageBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 100%;
  border-radius: 16px;
  border: ${({ theme }) => `1px solid ${theme.color.primaryDark}`};
`;

TreeStore.getState().getTreesForUser();
const Trees = () => {
  const { trees, treesPending, setCurrentTree } = TreeStore();
  const { isTreeDrawerOpen, setIsTreeDrawerOpen, treeDrawerType, setTreeDrawerType } = useStore(CommonStore);
  if (treesPending) return <>Loading</>;

  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {trees?.map((tree) => (
        <StyledBox>
          {tree.image ? (
            <StyledImageBox $image={tree.image} />
          ) : (
            <NoImageBox>
              <CameraOffIcon width={60} height={60} />
            </NoImageBox>
          )}

          <Typography variant="body2">{tree.name}</Typography>
          <Button
            onClick={() => {
              setCurrentTree(tree);
              setTreeDrawerType(DRAWER_VARIANTS.Edit);
              setIsTreeDrawerOpen(true);
            }}
          >
            редактировать
          </Button>
          <Link href={`tree/${tree.id}`} key={tree.id} sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Открыть
          </Link>
        </StyledBox>
      ))}
      <Button
        sx={{ padding: 0 }}
        onClick={() => {
          setCurrentTree(null);
          setTreeDrawerType(DRAWER_VARIANTS.Create);
          setIsTreeDrawerOpen(true);
        }}
      >
        <StyledBox>
          <PlusIcon width={60} height={60} />
        </StyledBox>
      </Button>

      {isTreeDrawerOpen && <TreeDrawer type={treeDrawerType} onCloseModal={() => setIsTreeDrawerOpen(false)} />}
    </Box>
  );
};

export default Trees;
