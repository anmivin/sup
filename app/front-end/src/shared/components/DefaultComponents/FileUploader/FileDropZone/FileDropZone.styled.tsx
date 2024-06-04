import { styled } from '@components/DefaultComponents/libs/material';

export const DragAndDropZone = styled('button')`
  & > * {
    pointer-events: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(12, 3)};
  border: 1px dashed ${({ theme }) => theme.color.monoA100};
  border-radius: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.color.monoA400};
  background: ${({ theme }) => theme.color.monoA50};
  transition: background 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.color.monoA100};
  }
  &:focus {
    background: ${({ theme }) => theme.color.monoA200};
  }
  &:active {
    background: ${({ theme }) => theme.color.monoA150};
  }
  &.drag-over {
    background: ${({ theme }) => theme.color.monoA200};
  }
  &.error {
    border: 1px solid ${({ theme }) => theme.color.error};
  }
`;

export const FileDropZoneLabel = styled('div')`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
