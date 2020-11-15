/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

// My components
import Label from './Label'

export default function EmailInput({
  placeholder,
  value,
  handleChange,
  theme,
  required,
  customCss
}) {
  return (
    <div
      css={css`
        text-align: left;

        ${customCss && customCss};
      `}
    >
      <Label htmlFor='email'>
        Email
        <input
          css={css`
            margin-top: 0.9rem;

            font-family: 'Raleway';
            font-size: 1.5rem;
            font-weight: var(--regular);
            color: ${theme === 'light'
              ? 'var(--darkColor)'
              : 'var(--lightColor)'};

            background-color: ${theme === 'light'
              ? 'var(--lightColor-dark)'
              : 'var(--darkColor-light)'};

            outline: none;
            border: none;
            border-bottom: 0.3 solid
              ${theme === 'light'
                ? 'var(--lightColor-dark)'
                : 'var(--darkColor-light)'};

            padding: 0.9rem 0.9rem;
            border-radius: 0.6rem;

            width: 100%;

            transition: all 0.3s ease-in-out;

            :invalid {
              color: var(--dangerColor);
            }

            ::-webkit-input-placeholder {
              font-family: 'Raleway';
            }

            :focus {
              outline: none;
              border-bottom: 0.3rem solid var(--successColor);
            }

            :focus:invalid {
              color: var(--dangerColor);
              border-bottom: 0.3rem solid var(--dangerColor);
            }
          `}
          name='email'
          type='email'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required={required}
        />
      </Label>
    </div>
  )
}
