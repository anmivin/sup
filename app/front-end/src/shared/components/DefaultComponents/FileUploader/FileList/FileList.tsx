import { CircularProgress } from '@mui/material';

import ContextMenuButton from '@components/ContextMenuButton';
import Box from '@components/DefaultComponents/Box';
import FileFormatIcon from '@components/DefaultComponents/FileUploader/FileFormatIcon/FileFormatIcon';
import IconButton from '@components/DefaultComponents/IconButton';
import Text from '@components/DefaultComponents/Typography/Text';
import { CloseIcon } from '@components/DefaultComponents/icons';
import { formatFileSize } from '@components/DefaultComponents/libs';

import { FileListItem, FileName, StyledMenuList } from './FileList.styled';

import { FileListProps } from './FileList.types';

const FileList = <TFileData,>({ files, onFileRemove, onFileClick, itemActions }: FileListProps<TFileData>) => {
  return (
    <>
      {!!files.length && (
        <StyledMenuList>
          {files.map((fileItem) => (
            <FileListItem key={fileItem.key}>
              <Box display="flex" gap={1.5} alignItems="center" width="100%">
                <FileFormatIcon filename={fileItem.properties.name} />
                <Box maxWidth="calc(100% - 48px)">
                  <Box display="flex" gap={0.5} alignItems="center">
                    <FileName onClick={onFileClick ? () => onFileClick(fileItem) : undefined}>
                      {fileItem.properties.name}
                    </FileName>

                    {fileItem.uploadProgress !== undefined ? (
                      <CircularProgress
                        variant={fileItem.uploadProgress === 0 ? 'indeterminate' : 'determinate'}
                        value={fileItem.uploadProgress * 100}
                        size={20}
                        color="secondary"
                      />
                    ) : (
                      !itemActions &&
                      onFileRemove && (
                        <IconButton
                          sx={{
                            p: 0,
                          }}
                          size="small"
                          onClick={() => onFileRemove(fileItem)}
                        >
                          <CloseIcon size={20} />
                        </IconButton>
                      )
                    )}
                  </Box>

                  <Text variant="caption" color="monoA400">
                    {formatFileSize(fileItem.properties.size)}
                  </Text>
                </Box>

                <Box flexGrow={1} />

                {itemActions && (
                  <ContextMenuButton
                    items={itemActions.map((itemAction) => ({
                      ...itemAction,
                      onClick: () => itemAction.onClick(fileItem),
                    }))}
                  />
                )}
              </Box>
            </FileListItem>
          ))}
        </StyledMenuList>
      )}
    </>
  );
};

export default FileList;
