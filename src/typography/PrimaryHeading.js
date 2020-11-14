/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function PrimaryHeading({ children, theme, customCss}) {
  return (
    <h1
      css={css`
        font-size: var(--primaryHeading);
        font-weight: var(--black);
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        ${customCss && customCss};
      `}
    >
      {children}
    </h1>
  )
}
