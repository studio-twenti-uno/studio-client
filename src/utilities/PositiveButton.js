/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function PositiveButton({
  callToAction,
  handleClick,
  theme,
  type,
  customCss,
}) {
  return (
    <button
      css={css`
        padding: 1.5rem 3rem;

        max-width: 21rem;
        min-width: 15rem;

        background-color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};
        
        border: none;
        outline: none;
        border-radius: 100px;

        transition: all 0.3s ease-in-out;

        backface-visibility: hidden;

        :hover {
          box-shadow: 0 0.9px 3px 0.3px #000000;
          transform: translateY(-0.3rem);
        }
        :active {
          box-shadow: 0 0 0px 0px #000000;
          transform: translateY(0.15rem);
        }

        ${customCss && customCss};
      `}
      onClick={handleClick}
      type={type}
    >
      <span
        css={css`
          font-weight: 600;
          font-size: 1.8rem;
          font-family: 'Raleway', sans-serif;
          color: ${theme === 'dark' ? 'var(--darkColor)' : 'var(--lightColor)'};
          transition: all 0.3s ease-in-out;
        `}
      >
        {callToAction}
      </span>
    </button>
  )
}
