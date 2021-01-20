import {
  useEffect,
  useState,
  useCallback,
  PropsWithChildren,
  ReactElement,
  Fragment,
} from 'react'
import Head from 'next/head'

import { Icons, Header } from '@portfolio/components'
import { TProps } from './layout.types'
import { StyledBack } from './layout.styled'

export function Layout({
  headerType,
  headerTitle,
  children,
}: PropsWithChildren<TProps>): ReactElement {
  const [showBack, setShowBack] = useState(false)

  // const memoHeightWrapper = useCallback(() => {
  //   if (window.pageYOffset > window.outerHeight) {
  //     setShowBack(true)
  //   } else {
  //     setShowBack(false)
  //   }
  // }, [window, setShowBack])

  // useEffect(() => {
  //   window.addEventListener('scroll', memoHeightWrapper)
  //   return () => {
  //     window.removeEventListener('scroll', memoHeightWrapper)
  //   }
  // })

  function goBackToTop(): void {
    // window.scrollTo(0, 0)
  }

  return (
    <Fragment>
      <Head>
        <title>Home | Constantin Chirila - Front End and UI developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header type={headerType} title={headerTitle} />
      {children}
      <StyledBack isVisible={showBack} onClick={goBackToTop}>
        <Icons type="back-arrow" />
      </StyledBack>
      {/* <Footer /> */}
    </Fragment>
  )
}
