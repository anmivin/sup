import MuiBadge from '@mui/material/Badge';
import { css, styled } from '@mui/material/styles';

import { BadgeProps } from './Badge.types';

export const BadgeStyled = styled(MuiBadge)<BadgeProps>`
  align-items: center;

  .MuiBadge-badge {
    min-width: 16px;
    height: 16px;
    border-radius: ${({ theme }) => theme.radius.lg};
    font-size: 11px;
    line-height: 16px;
    font-weight: 700;
    user-select: none;
    pointer-events: none;
    padding: 0 4px;

    &.MuiBadge-overlapCircular {
      top: 12%;
      right: 17%;
    }

    ${({ size }) => {
      switch (size) {
        case 'small':
          return css`
            min-width: 14px;
            height: 14px;
            border-radius: 7px;
            font-size: 9px;
            line-height: 12px;
            letter-spacing: 0.6px;
          `;
        case 'large':
          return css`
            min-width: 20px;
            height: 20px;
            border-radius: 10px;
          `;
        case 'xl':
          return css`
            min-width: 24px;
            height: 24px;
            border-radius: 12px;
          `;

        case 'medium':
        default:
          return null;
      }
    }}

    ${({ position }) =>
      position === 'inline'
        ? css`
            position: static;
            transform: inherit;
            margin-left: 4px;
            &.MuiBadge-invisible {
              display: none;
            }
          `
        : ''}

    ${({ theme }) => css`
      color: ${theme.color.monoA550};
      background-color: ${theme.color.monoA100};
      &.MuiBadge-colorPrimary {
        color: ${theme.color.monoB};
        background-color: ${theme.color.primary};
      }
      &.MuiBadge-colorSecondary {
        color: ${theme.color.monoA800};
        background-color: ${theme.color.secondary};
      }
      &.MuiBadge-colorWarning {
        color: ${theme.color.monoB};
        background-color: ${theme.color.warning};
      }
      &.MuiBadge-colorSuccess {
        color: ${theme.color.monoB};
        background-color: ${theme.color.success};
      }
      &.MuiBadge-colorError {
        color: ${theme.color.monoB};
        background-color: ${theme.color.error};
      }
      &.MuiBadge-colorInfo {
        color: ${theme.color.monoB};
        background-color: ${theme.color.info};
      }
    `}
  }
  .MuiBadge-dot {
    height: 8px;
    min-width: 8px;
  }
`;
