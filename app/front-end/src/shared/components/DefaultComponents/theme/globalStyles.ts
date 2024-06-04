import { css } from '@mui/material/styles';
import { Theme } from 'ui/theme/theme.types';

export const globalStyles = (theme: Theme) => css`
  body {
    margin: 0;
    font-family: ${theme.typography.fontFamily || 'Roboto'}, sans-serif;
    font-size: ${theme.typography.body1.fontSize}px;
    line-height: ${theme.typography.body1.lineHeight};
    letter-spacing: ${theme.typography.body1.letterSpacing}px;
    font-weight: ${theme.typography.body1.fontWeight};
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: ${theme.color.monoA900};
    background-color: ${theme.color.monoB};

    // снова добавил "overflow: hidden", чтобы не было случайных сдвигов body. Вместо удаления, закоментить написать почему..
    // В storybook без этого не работет скролл, поэтому отдельно для сторибука добавил стиль в .storybook/style.css
    overflow: hidden;

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${theme.color.link};
    text-underline-offset: 1px;
    text-decoration-thickness: 1px;

    &:visited {
      color: ${theme.color.linkVisited};
    }
  }

  button {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.button.fontSize}px;
    line-height: ${theme.typography.button.lineHeight};
    letter-spacing: ${theme.typography.button.letterSpacing}px;
    font-weight: ${theme.typography.button.fontWeight};
    color: ${theme.color.monoA900};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-bottom: ${theme.spacing(4)};
  }
  p,
  input,
  textarea {
    font-size: ${theme.typography.body1.fontSize}px;
    line-height: ${theme.typography.body1.lineHeight};
    letter-spacing: ${theme.typography.body1.letterSpacing}px;
    font-weight: ${theme.typography.body1.fontWeight};
    color: ${theme.color.monoA900};
  }
  p {
    margin-bottom: ${theme.spacing(2)};
  }

  h1 {
    ${theme.fontStyle.h1}
    a {
      text-underline-offset: 3px;
      text-decoration-thickness: 3px;
    }
  }

  h2 {
    ${theme.fontStyle.h2}
    a {
      text-underline-offset: 3px;
      text-decoration-thickness: 2px;
    }
  }

  h3 {
    ${theme.fontStyle.h3}
    a {
      text-underline-offset: 2px;
      text-decoration-thickness: 2px;
    }
  }

  h4 {
    ${theme.fontStyle.h4}
    a {
      text-underline-offset: 2px;
      text-decoration-thickness: 2px;
    }
  }

  h5 {
    ${theme.fontStyle.h5}
    a {
      text-underline-offset: 3px;
      text-decoration-thickness: 2px;
    }
  }

  h6 {
    margin-bottom: ${theme.spacing(4)};
    ${theme.fontStyle.h6}
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 4px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
    width: 16px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${theme.color.monoA300};
    border-radius: 4px;

    &:active,
    &:hover {
      background-color: ${theme.color.monoA500};
    }
  }
`;
