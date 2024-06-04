import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

export interface BadgeProps extends MuiBadgeProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  position?: 'overlap' | 'inline';
}
