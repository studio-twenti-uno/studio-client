/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function Container({
  theme,
  children,
  flexDirection,
  customCss,
}) {
  return (
    <div
      css={css`
        background-color: ${theme === 'dark' ? 'var(--darkColor)' : 'var(--lightColor)'};

        display: flex;
        flex-direction: ${flexDirection};

        max-width: 980px;
        margin: 0 auto;

        @media (max-width: 980px){
          max-width: 95vw;
        }

        ${customCss && customCss};
      `}
    >
      {children}
    </div>
  )
}
