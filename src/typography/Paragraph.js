/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function Paragraph({ children, theme, customCss }) {
  return (
    <p
      css={css`
        font-size: 2.1rem;
        font-weight: var(--regular);
        line-height: 1.5;
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        ${customCss && customCss};
      `}
    >
      {children}
    </p>
  )
}
