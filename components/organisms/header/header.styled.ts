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
  max-width: 53rem;
`

export const StyledTitleSpan = styled.span`
  font-size: 3rem;
  text-transform: none;
  font-family: ${({ theme }) => theme.font.family.headerReg};
  opacity: 0.5;
  display: block;
  @media only screen and (max-width: 630px) {
    font-size: 2.5rem;
  }
`

export const StyledDescription = styled.h2`
  font-family: ${({ theme }) => theme.font.family.base};
  color: ${({ theme }) => theme.colors.lightText};
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
  font-family: ${({ theme }) => theme.font.family.headerReg};
  font-size: 2rem;
  text-transform: uppercase;
  margin-left: 4rem;
  @media only screen and (max-width: ${({ theme }) => theme.screen.small}) {
    display: block;
    margin: 2rem 0 0 0;
    text-align: center;
  }
`

export const StyledGraphic = styled.div`
  width: 77.5rem;
  position: absolute;
  top: 0.5rem;
  right: -10rem;

  @media only screen and (max-width: ${({ theme }) => theme.screen.xlarge}) {
    right: -30rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screen.large}) {
    display: none;
  }
`

export const StyledSimpleGraphic = styled(StyledGraphic)`
  width: auto;
  left: -7rem;
  right: auto;
  top: 7rem;
  z-index: 1;

  @media only screen and (max-width: ${({ theme }) => theme.screen.large}) {
    display: block;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screen.medium}) {
    display: none;
  }
`

export const StyledImage = styled.img`
  width: auto;
  position: absolute;
  top: 13%;
  left: 13%;
`
export const StyledImageSimple = styled(StyledImage)`
  position: unset;
`
