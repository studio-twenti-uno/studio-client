/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function TextButton({
  callToAction,
  handleClick,
  theme,
  hoverUnderline,
  customCss,
  type,
}) {
  return (
    <button
      css={css`
        padding: 1.5rem 3rem;
        background-color: transparent;
        border: none;
        outline: none;
        :hover span {
          color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};
          border-bottom: ${hoverUnderline
            ? `1px solid ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'}`
            : null};
        }

        ${customCss && customCss}
      `}
      onClick={handleClick}
      type={type}
    >
      <span
        css={css`
          font-weight: 500;
          font-size: 1.5rem;
          font-family: 'Raleway';
          color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};
          transition: all 0.3s ease-in-out;
        `}
      >
        {callToAction}
      </span>
    </button>
  )
}
