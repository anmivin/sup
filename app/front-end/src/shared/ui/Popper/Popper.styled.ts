import { Paper } from '@mui/material';
import { css, styled } from '@mui/material/styles';

export const StyledPopperPaper = styled(Paper)(
  ({ theme }) => css`
    background-color: ${theme.color.monoB};
    padding: ${theme.spacing(1.5, 2)};
    box-shadow: ${theme.shadow.down500};

    // &:before {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   width: 10px;
    //   height: 6px;
    //   bottom: -2px;
    //   border-radius: 0 0 2px 0;
    //   left: calc(50% - 5.5px);
    //   transform: rotate(45deg);
    //   background-color: ${theme.color.monoB};
    // }
    //.MuiPopperUnstyled-root[data-popper-placement='bottom'] & {
    //  &:before {
    //    bottom: auto;
    //    top: -2px;
    //    border-radius: 0 2px 0 0;
    //    transform: rotate(-45deg);
    //  }
    //}

    .MuiPopperUnstyled-root[data-popper-placement='bottom'] & {
      .arrow {
        top: 0;
        left: 0;
        margin-top: -0.9em;
        width: 3em;
        height: 1em;

        &:before {
          border-width: 0 1em 1em 1em;
          border-color: transparent transparent ${theme.palette.background.paper} transparent;
        }
      }
    }

    .MuiPopperUnstyled-root[data-popper-placement='top'] & {
      .arrow {
        bottom: 0;
        left: 0;
        margin-bottom: -0.9em;
        width: 3em;
        height: 1em;

        &:before {
          border-width: 1em 1em 0 1em;
          border-color: ${theme.palette.background.paper} transparent transparent transparent;
        }
      }
    }

    .MuiPopperUnstyled-root[data-popper-placement='left'] & {
      .arrow {
        right: 0;
        margin-right: -0.9em;
        width: 1em;
        height: 3em;
        &:before {
          border-width: 1em 0 1em 1em;
          border-color: transparent transparent transparent ${theme.palette.background.paper};
        }
      }
    }

    .MuiPopperUnstyled-root[data-popper-placement='right'] & {
      .arrow {
        left: 0;
        margin-left: -0.9em;
        width: 1em;
        height: 3em;
        &:before {
          border-width: 1em 1em 1em 0;
          border-color: transparent ${theme.palette.background.paper} transparent transparent;
        }
      }
    }

    .arrow {
      position: absolute;
      font-size: 7px;
      width: 3em;
      height: 3em;

      &:before {
        content: '';
        margin: auto;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
      }
    }
  `
);
