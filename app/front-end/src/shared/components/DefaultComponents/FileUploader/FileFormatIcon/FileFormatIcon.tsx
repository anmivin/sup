import { useMemo } from 'react';

// eslint-disable-next-line import/named
import { lowerCase } from 'lodash';

import { objectEntries } from '@components/DefaultComponents/libs';

import { StyledFileIcon } from './FileFormatIcon.styled';

import { fileFormats } from './FileFormatIcon.config';

import { FileFormatIconProps } from './FileFormatIcon.types';

const FileFormatIcon = ({ filename, className, ...restProps }: FileFormatIconProps) => {
  const extension = useMemo(() => filename?.match(/\.?([a-z]+)$/i)?.[1], [filename]);
  const fileType = useMemo(
    () =>
      extension
        ? objectEntries(fileFormats).find(([, extensions]) =>
            extensions.some((extensionItem) => extensionItem === lowerCase(extension)),
          )?.[0]
        : undefined,
    [extension],
  );

  return (
    <StyledFileIcon className={[className, fileType].join(' ')} viewBox="0 0 41 48" {...restProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C7.68629 0 5 2.68629 5 6V42C5 45.3137 7.68629 48 11 48H35C38.3137 48 41 45.3137 41 42V11.2931C41 10.4678 40.6599 9.67883 40.0599 9.1121L31.2789 0.818961C30.722 0.293009 29.985 0 29.219 0H11Z"
        fill="black"
        fillOpacity="0.08"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.1213 10.1213L30.8787 2.87868C30.3161 2.31607 29.553 2 28.7574 2H28V10C28 11.6569 29.3431 13 31 13H39V12.2426C39 11.447 38.6839 10.6839 38.1213 10.1213Z"
        fill="black"
        fillOpacity="0.08"
      />
      <rect y="22" width="30" height="14" rx="3" className="extension-label-box" />
      <text
        y="32"
        x="15"
        fontSize="9"
        fill="white"
        fontFamily="Graphik"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="0.6"
        className="extension-label-text"
      >
        {fileType ? extension : '?'}
      </text>
    </StyledFileIcon>
  );
};

export default FileFormatIcon;
