/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

export default function Preloader({theme}) {
    return (
        <div css={css`
            color: ${theme === 'dark' ? 'var(--lightColor)' : 'var(--darkColor)'}
        `}>
            loading...
        </div>
    )
}
