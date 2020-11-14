/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/react'
import { useState, Suspense, lazy } from 'react'
// import { Router } from '@reach/router'

// My components
const Preloader = lazy(() => import('./utilities/Preloader'))
const Navigation = lazy(() => import('./components/Navigation'))


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
    </Suspense>
  );
}

export default App;
