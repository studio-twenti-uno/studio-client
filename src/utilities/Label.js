/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function Label({
  htmlFor,
  children,
  theme,
  customCss,
}) {
  return (
    <label
      css={css`
        font-family: 'Raleway', sans-serif;
        font-size: 1.5rem;
        font-weight: var(--light);
        color: ${theme === 'light'
          ? 'var(--darkColor)'
          : 'var(--lightColor)'};

        padding-left: 0.9rem;

        ${customCss && customCss};
      `}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
