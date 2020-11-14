/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function DisplayHeading({ children, theme, customCss }) {
  return (
    <h1
      css={css`
        font-size: var(--displayHeading);
        font-weight: var(--black);
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        @media (max-width: 500px) {
          font-size: 4.2rem;
        }

        ${customCss && customCss};
      `}
    >
      {children}
    </h1>
  )
}
