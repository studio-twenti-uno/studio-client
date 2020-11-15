/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/react'
import { useState, Suspense, lazy } from 'react'
// import { Router } from '@reach/router'

// Assets
import { ReactComponent as Instagram } from './svg/instagram.svg'
import { ReactComponent as LinkedIn } from './svg/linkedin.svg'
import { ReactComponent as Twitter } from './svg/twitter.svg'
import { ReactComponent as InstagramWhite } from './svg/instagramWhite.svg'
import { ReactComponent as LinkedInWhite } from './svg/linkedinWhite.svg'
import { ReactComponent as TwitterWhite } from './svg/twitterWhite.svg'
import { ReactComponent as Speck} from './svg/speckPig.svg'
import { ReactComponent as ExpertPlans} from './svg/expertPlans.svg'
import { default as Rodeo} from './img/RodeoAppIconBrandGradient_1024.png'
import { ReactComponent as Westshore} from './svg/westshore.svg'

// My components
// const Preloader = lazy(() => import('./utilities/Preloader'))
const Navigation = lazy(() => import('./components/Navigation'))
const Container = lazy(() => import('./utilities/Container'))
const DisplayHeading = lazy(() => import('./typography/DisplayHeading'))
const Paragraph = lazy(() => import('./typography/Paragraph'))
const PositiveButton = lazy(() => import('./utilities/PositiveButton'))
const Link = lazy(() => import('./typography/Link'))
const Subheading = lazy(() => import('./typography/Subheading'))


function App() {
  // State
  const [theme, setTheme] = useState('light') 

  return (
    <Suspense
      fallback={
        'loading...'
      }
    >
      <Navigation theme={theme} setTheme={setTheme}/>
      {/* Display Heading */}
      <main css={css`
        margin-top: 7.2rem;
        background-color: ${theme === 'light' ? 'var(--lightColor)' : 'var(--darkColor)'};
        padding-top: 12rem;

        @media(max-width: 500px){
          margin-top: 6.3rem;
        }
        @media(max-width: 390px){
          margin-top: 1.2rem;
        }
      `}>
        {/* Text and CTA container */}
        <Container theme={theme} flexDirection='column' customCss={css`
          @media(max-width: 500px){
            text-align: center;
          }
        `}>
          {/* title */}
          <DisplayHeading theme={theme} customCss={css`
            display: flex;
            flex-direction: column;
            margin-bottom: 1.8rem;
          `}>
              <span>Enterprise driven</span>
              <span>digitalization.</span>
          </DisplayHeading>
          {/* paragraph intro */}
          <Paragraph theme={theme} customCss={css`
            max-width: 600px;
            line-height: 1.8;
          `}>
            studio twenti uno is a digital arts and engineering studio dedicated to the transformation and adaptation of enterprises into the digital world.
          </Paragraph>
          {/* Buttons and social */}
          <div css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;

            max-width: 450px;

            margin-top: 1.8rem;

            @media(max-width: 500px) {
              flex-direction: column;
            }
          `}> 
            <Link href="mailto:studio@twentiuno.com" theme={theme}>
                  <PositiveButton
                    theme={theme}
                    callToAction='consult with us'
                    type='button'
                    customCss={css`
                      padding: 1.5rem 6rem;
                      max-width: 30rem;
                    `}
                  />
            </Link>
            <div css={css`
              width: 40%;
              display: flex;
              justify-content: space-between;
              margin-left: 0.9rem;
              @media(max-width: 500px) {
              margin-top: 1.8rem;
              margin-left: 0;
              width: 66%;
            }
            `}>
              <Link href='https://www.linkedin.com/company/studio-twenti-uno' theme={theme} >
              <LinkedIn
              css={css`
                height: 5.1rem;

                ${theme === 'dark' && css`
                  display: none;
                `}
              `}
            />
            <LinkedInWhite
              css={css`
                height: 5.1rem;

                ${theme === 'light' && css`
                  display: none;
                `}
              `}
            />
            </Link>
            <Link href='https://www.instagram.com/twenti.uno' theme={theme} >
              <Instagram 
              css={css`
                height: 5.1rem;

                ${theme === 'dark' && css`
                  display: none;
                `}
              `}
            />
            <InstagramWhite 
              css={css`
                height: 5.1rem;

                ${theme === 'light' && css`
                  display: none;
                `}
              `}
            />
            </Link>
            
            <Link href='https://www.twitter.com/twenti_uno' theme={theme} >
              <Twitter 
              css={css`
                height: 5.1rem;

                ${theme === 'dark' && css`
                  display: none;
                `}

              `}
            />
            <TwitterWhite 
              css={css`
                height: 5.1rem;

                ${theme === 'light' && css`
                  display: none;
                `}

              `}
            />
            </Link>
            </div>
            
          </div>
        </Container>
        {/* As seen in container */}
        <Container theme={theme} flexDirection='column' customCss={css`
          padding: 9rem 0;

          @media(max-width: 500px){
            padding: 4.5rem 0;
            text-align: center;

            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}>
          <Subheading theme={theme}>
            As seen in
          </Subheading>
          {/* Partners containers */}
          <div
            css={css`
              display: flex;
              align-items: center;
              max-width: 240px;
              justify-content: space-between;

              @media(max-width: 500px){
                max-width: 450px;
                width: 72vw;
              }
            `}
          >
            <Link href='https://westshoregroup.co.uk' theme={theme}>
              <Westshore
                css={css`
                height: 9rem;
                `}
                />
            </Link>
            <Link href='https://expertplans.co.uk' theme={theme}>
              <ExpertPlans
                css={css`
                height: 9rem;
                `}
                />
            </Link>
            <Link href='https://rodeoworld.co.uk' theme={theme}>
              <img
              src={Rodeo}
              alt='Rodeo World Ltd. Link'
                css={css`
                height: 4.5rem;
                `}
                />
            </Link>
            <Link href='https://speckcrossfit.com' theme={theme}>
              <Speck
                css={css`
                height: 9rem;
                `}
                />
            </Link>
          </div>
        </Container>
      </main>
    </Suspense>
  );
}

export default App;
