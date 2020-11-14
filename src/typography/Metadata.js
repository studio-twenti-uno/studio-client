/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function Metadata({ children, theme, customCss }) {
  return (
    <p
      css={css`
        font-size: 1.5rem;
        font-weight: var(--regular);
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        ${customCss && customCss};
      `}
    >
      {children}
    </p>
  )
}
