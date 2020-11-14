/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function SecondaryHeading({
  children,
  theme,
  customCss,
}) {
  return (
    <h2
      css={css`
        font-size: var(--secondaryHeading);
        font-weight: var(--extraBold);
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        ${customCss && customCss};
      `}
    >
      {children}
    </h2>
  )
}
