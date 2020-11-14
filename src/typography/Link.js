/* eslint-disable import/no-anonymous-default-export */
/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'
import { Link } from '@reach/router'

export default function ({ children, to, href, theme, customCss }) {
  return (
    to ? (
      <Link
      to={to}
      css={css`
        font-size: 1.8rem;
        font-weight: var(--medium);
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        :hover {
          color: var(--successColor);
        }

        ${customCss && customCss};
      `}
    >
      {children}
    </Link>
    ) : (
      <a
      href={href}
      css={css`
        font-size: 1.8rem;
        font-weight: var(--medium);
        color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'};

        ${customCss && customCss};
      `}
    >
      {children}
    </a>
    )
  )
}
