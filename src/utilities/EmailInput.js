/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'

// My components
import Label from './Label'

export default function EmailInput({
  placeholder,
  state,
  setState,
  theme,
  required,
  customCss
}) {
  // Change Handler
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value.trim(),
    })
  }

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

            font-family: 'Montserrat';
            font-size: 1.5rem;
            font-weight: 400;
            color: ${theme === 'light'
              ? 'var(--darkColor)'
              : 'var(--lightColor)'};

            background-color: ${theme === 'light'
              ? 'var(--lightColor-darker)'
              : 'var(--darkColor-lighter)'};

            outline: none;
            border: none;
            border-bottom: 0.3 solid
              ${theme === 'light'
                ? 'var(--lightColor-darker)'
                : 'var(--darkColor-lighter)'};

            padding: 0.9rem 0.9rem;
            border-radius: 0.6rem;

            width: 100%;

            transition: all 0.3s ease-in-out;

            :invalid {
              color: var(--dangerColor);
            }

            ::-webkit-input-placeholder {
              font-family: 'Montserrat';
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
          value={state['email']}
          onChange={handleChange}
          required={required}
        />
      </Label>
    </div>
  )
}
