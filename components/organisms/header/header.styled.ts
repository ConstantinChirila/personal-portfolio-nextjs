import styled from 'styled-components'
import Image from 'next/image'

// button {
//     @include resp(small) {
//       display: block;
//       margin: 20px auto;
//     }
//   }

export const StyledHeader = styled.header`
  width: 100%;
  overflow: hidden;
`
export const StyledContainer = styled.div`
  max-width: 120rem;
  padding: 2rem 2rem 10rem 2rem;
  margin: 0 auto;
  position: relative;

  @media only screen and (max-width: ${({ theme }) => theme.screen.small}) {
    text-align: center;
    padding-bottom: 7rem;
  }
`

export const StyledContainerSimple = styled(StyledContainer)`
  padding: 2rem 2rem 4rem 2rem;
`

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.family.headerMed};
  font-size: 5.6rem;
  line-height: 6.2rem;
  text-transform: uppercase;
  max-width: 62rem;
  letter-spacing: 0;
  margin-top: 4rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 630px) {
    font-size: 4.6rem;
    line-height: 5.5rem;
    margin-top: 3.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 520px) {
    font-size: 3.5rem;
    line-height: 4.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.xsmall}) {
    font-size: 3rem;
    line-height: 4rem;
  }
`
export const StyledTitleSimple = styled(StyledTitle)`
  text-transform: none;
  z-index: 2;
  position: relative;
  max-width: 530px;
`

export const StyledTitleSpan = styled.span`
  font-size: 3rem;
  text-transform: none;
  font-family: $headerFontFamilyReg;
  opacity: 0.5;
  display: block;
  @media only screen and (max-width: 630px) {
    font-size: 2.5rem;
  }
`

export const StyledSubTitle = styled.h2`
  font-family: $baseFontFamily;
  color: $lightText;
  font-weight: 400;
  font-size: 1.8rem;
  max-width: 57rem;
  line-height: 3rem;
  margin-bottom: 4rem;
  @media only screen and (max-width: 520px) {
    font-size: 2.5rem;
  }
`

export const StyledCTA = styled.a`
  font-family: $headerFontFamilyReg;
  font-size: 2rem;
  text-transform: uppercase;
  margin-left: 4rem;
  @media only screen and (max-width: ${({ theme }) => theme.screen.small}) {
    display: block;
    margin: 20px 0 0 0;
    text-align: center;
  }
`

export const StyledGraphic = styled.div`
  width: 775px;
  position: absolute;
  top: -5px;
  right: -10rem;

  @media only screen and (max-width: ${({ theme }) => theme.screen.xlarge}) {
    right: -300px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screen.large}) {
    display: none;
  }
`

export const StyledSimpleGraphic = styled(StyledGraphic)`
  width: auto;
  left: -70px;
  right: auto;
  top: 70px;
  z-index: 1;

  @media only screen and (max-width: ${({ theme }) => theme.screen.large}) {
    display: block;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screen.medium}) {
    display: none;
  }
`

export const StyledImage = styled(Image)`
  width: auto;
  position: absolute;
  top: 13%;
  left: 13%;
`
export const StyledImageSimple = styled(StyledImage)`
  position: unset;
`
