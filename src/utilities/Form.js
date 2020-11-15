/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

// My Components
import PositiveButton from './PositiveButton'
import TextButton from './TextButton'

export default function Form({
  name,
  handleSubmit,
  children,
  positiveButton,
  textButton,
  customCss,
}) {
  return (
    <form
      name={name}
      onSubmit={handleSubmit}
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;

        @media (max-width: 390px) {
          width: 95vw;
        }

        ${customCss && customCss};
      `}
    >
      {children}
      {/* Action row */}
      <div>
        {textButton && positiveButton ? (
          <div
            id='buttons'
            css={css`
              display: flex;
              justify-content: space-between;
              padding: 0 3rem;
            `}
          >
            <PositiveButton {...positiveButton} />
            <TextButton {...textButton} />
          </div>
        ) : null}
      </div>
    </form>
  )
}
