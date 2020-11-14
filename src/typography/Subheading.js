/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function Subheading({ children, theme, customCss }) {
  return (
    <h3
      css={css`
        font-size: var(--subheading);
        font-weight: 500;
        font-family: 'Montserrat';
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        ${customCss && customCss};
      `}
    >
      {children}
    </h3>
  )
}
