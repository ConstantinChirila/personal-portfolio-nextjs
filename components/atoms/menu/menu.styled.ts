import styled, { css } from 'styled-components'

import Link from 'next/link'
import { TStyledLink } from './menu.types'

export const StyledMenu = styled.menu`
  max-width: 120rem;
  padding: 2rem 0;
  margin: 0 auto;
`
export const StyledLogo = styled.div`
  float: left;

  @media only screen and (max-width: ${({ theme }) => theme.screen.small}) {
    float: none;
  }
`
export const StyledListContainer = styled.menu`
  margin: 0 0 0 3rem;
  float: left;
`
export const StyledList = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 1.2rem 1.5rem;
`

export const StyledLink = styled.a<TStyledLink>`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.family.headerBold};
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  ${({ isActive, theme }) =>
    isActive
      ? css`
          border-bottom: 2px solid ${theme.colors.secondary};
        `
      : ''}

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    ${({ isActive, theme }) =>
      isActive
        ? css`
            border-color: ${theme.colors.primary};
          `
        : ''}
  }
`
