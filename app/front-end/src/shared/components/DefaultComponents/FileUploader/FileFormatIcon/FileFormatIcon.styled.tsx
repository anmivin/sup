import { SvgIcon } from '@mui/material';

import { styled } from '@components/DefaultComponents/libs/material';

export const StyledFileIcon = styled(SvgIcon)`
  & {
    width: 41px;
    height: auto;
  }

  .extension-label-box {
    fill: #9a9eaf;
  }
  .extension-label-text {
    text-transform: uppercase;
  }

  &.text-file .extension-label-box {
    fill: #227aff;
  }
  &.spreadsheet-file .extension-label-box {
    fill: #42db5b;
  }
  &.archive-file .extension-label-box {
    fill: #9672ff;
  }
  &.document-file .extension-label-box {
    fill: #ff4040;
  }
  &.image-file .extension-label-box {
    fill: #ffbb00;
  }
`;
