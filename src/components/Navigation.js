/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

// My components
import Link from '../typography/Link'
import PositiveButton from '../utilities/PositiveButton'

// Assets
import { ReactComponent as Logotype } from '../svg/logotype.svg'
import { ReactComponent as Logo } from '../svg/logo.svg'

export default function Navigation({
  theme,
  setTheme
}) {
  return (
    <nav
      css={css`
        background-color: ${theme === 'light'
          ? 'var(--lightColor)'
          : 'var(--darkColor)'};
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        z-index: 99;

        padding: 1.2rem 0;

        @media (max-width: 600px) {
          padding: 0.6rem 0;
        }
      `}
    >
      {/* 980px width constraint */}
      <div
        css={css`
          max-width: 980px;
          margin: 0 auto;

          display: flex;
          justify-content: space-between;
          align-items: center;

          @media (max-width: 980px) {
            width: 100%;
            padding: 0 0.9rem;
          }
        `}
      >
        {/* Logotype linked to main site */}
        <Logotype
          css={css`
            width: 18rem;
            height: auto;
            fill: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};
            transition: all 0.3s ease-in-out;

            #21 {
              fill: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'}
            }

            :hover {
              transform: scale(1.02);
            }

            :active {
              transform: scale(1);
            }

            @media (max-width: 420px){
              display: none;
            }
          `}
        />
        <Logo
          css={css`
            width: 6rem;
            height: auto;
            fill: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};
            transition: all 0.3s ease-in-out;

            #21 {
              fill: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'}
            }

            :hover {
              transform: scale(1.02);
            }
            :active {
              transform: scale(1);
            }

            @media (min-width: 420px){
              display: none;
            }
          `}
        />
        {/* Conditional logout */}
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href='mailto:studio@twentiuno.com' theme={theme} customCss={css`
            margin-right: 1.8rem;
            padding: 1.5rem;
            border-radius: 100px;

            :hover {
              box-shadow: 0 1.5px 3px 0.3px #000;
              transform: translateY(-1.5px);
            }

            :active {
              box-shadow: 0 0px 1.5px 0.15px #000;
              transform: translateY(0.12px);
            }

            @media (max-width: 330px){
              display: none;
            }
          `}>
            contact us
          </Link>
          <PositiveButton
            callToAction={theme === 'dark' ? 'go light 🌞' : 'go dark 🌝'}
            handleClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            theme={theme}
            type='button'
          />
        </div>
      </div>
    </nav>
  )
}
