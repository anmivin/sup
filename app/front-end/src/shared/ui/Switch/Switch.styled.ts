import { Switch } from '@mui/material';
import { switchClasses } from '@mui/material';
import { css, styled } from '@mui/material/styles';

switchClasses.sizeLarge = 'MuiSwitch-sizeLarge';

// sizes in units
const SWITCH_SIZES = {
  ripple: {
    small: 8,
    medium: 9,
    large: 10,
  },
  railWidth: {
    small: 7,
    medium: 8,
    large: 9.5,
  },
  railHeight: {
    small: 1,
    medium: 3.5,
    large: 6,
  },
  thumb: {
    small: 4,
    medium: 5,
    large: 6,
  },
  padding: 2,
};

export const StyledSwitch = styled(Switch)(
  ({ theme }) => css`
    width: ${theme.spacing(SWITCH_SIZES.railWidth.medium + SWITCH_SIZES.padding * 2)};
    height: ${theme.spacing(SWITCH_SIZES.ripple.medium)};
    padding: ${theme.spacing((SWITCH_SIZES.ripple.medium - SWITCH_SIZES.railHeight.medium) / 2, SWITCH_SIZES.padding)};

    .${switchClasses.thumb} {
      box-shadow: none;
      border: 2px solid ${theme.color.monoA500};
      width: ${theme.spacing(SWITCH_SIZES.thumb.medium)};
      height: ${theme.spacing(SWITCH_SIZES.thumb.medium)};
    }

    .${switchClasses.track} {
      background-color: ${theme.color.monoA500};
      opacity: 1;
    }

    .${switchClasses.switchBase} {
      padding: ${theme.spacing(SWITCH_SIZES.padding)};

      &:hover {
        background-color: ${theme.color.monoA50};
      }
      &:active {
        background-color: ${theme.color.monoA150};
      }

      &.${switchClasses.checked} {
        color: ${theme.color.monoB};
        transform: translateX(${theme.spacing(SWITCH_SIZES.railWidth.medium - SWITCH_SIZES.thumb.medium)});

        .${switchClasses.thumb} {
          border-color: ${theme.color.secondary300};
        }

        + .${switchClasses.track} {
          background-color: ${theme.color.secondary300};
          opacity: 1;
        }

        &:hover {
          background-color: ${theme.color.secondaryA50};
        }
        &:active {
          background-color: ${theme.color.secondaryA150};
        }
      }

      &.${switchClasses.disabled} {
        .${switchClasses.thumb} {
          border-color: ${theme.color.monoA150};
        }

        &.${switchClasses.checked} {
          color: ${theme.color.monoB};

          .${switchClasses.thumb} {
            border-color: ${theme.color.secondaryA500};
          }
        }

        + .${switchClasses.track} {
          opacity: 0.3;
        }
      }
    }

    &.${switchClasses.sizeSmall} {
      width: ${theme.spacing(SWITCH_SIZES.railWidth.small + SWITCH_SIZES.padding * 2)};
      height: ${theme.spacing(SWITCH_SIZES.ripple.small)};
      padding: ${theme.spacing((SWITCH_SIZES.ripple.small - SWITCH_SIZES.railHeight.small) / 2, SWITCH_SIZES.padding)};

      .${switchClasses.thumb} {
        width: ${theme.spacing(SWITCH_SIZES.thumb.small)};
        height: ${theme.spacing(SWITCH_SIZES.thumb.small)};
      }

      .${switchClasses.switchBase}.${switchClasses.checked} {
        transform: translateX(${theme.spacing(SWITCH_SIZES.railWidth.small - SWITCH_SIZES.thumb.small)});
      }
    }

    &.${switchClasses.sizeLarge} {
      width: ${theme.spacing(SWITCH_SIZES.railWidth.large + SWITCH_SIZES.padding * 2)};
      height: ${theme.spacing(SWITCH_SIZES.ripple.large)};
      padding: ${theme.spacing((SWITCH_SIZES.ripple.large - SWITCH_SIZES.railHeight.large) / 2, SWITCH_SIZES.padding)};

      .${switchClasses.thumb} {
        width: ${theme.spacing(SWITCH_SIZES.thumb.large)};
        height: ${theme.spacing(SWITCH_SIZES.thumb.large)};
      }

      .${switchClasses.switchBase}.${switchClasses.checked} {
        transform: translateX(${theme.spacing(SWITCH_SIZES.railWidth.large - SWITCH_SIZES.thumb.large)});
      }

      .${switchClasses.track} {
        border-radius: ${theme.spacing(SWITCH_SIZES.railHeight.large / 2)};
      }
    }
  `
);

export { switchClasses };
