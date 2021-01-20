import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { config } from '@portfolio/data'
import {
  StyledMenu,
  StyledLogo,
  StyledListContainer,
  StyledList,
  StyledLink,
} from './menu.styled'
import { Icons } from '../icons'

export function Menu() {
  const router = useRouter()

  return (
    <StyledMenu>
      <StyledLogo>
        <Link href="/">
          <Fragment>
            <Icons type="logo" />
          </Fragment>
        </Link>
      </StyledLogo>
      <StyledListContainer>
        <StyledList>
          <Link href="/">
            <StyledLink isActive={router.pathname == '/'}>Home</StyledLink>
          </Link>
        </StyledList>
        <StyledList>
          <Link href="/work">
            <StyledLink isActive={router.pathname == '/work'}>Work</StyledLink>
          </Link>
        </StyledList>
        <StyledList>
          <Link href="/blog">
            <StyledLink isActive={router.pathname.includes('/blog')}>
              Blog
            </StyledLink>
          </Link>
        </StyledList>
        <StyledList>
          <Link
            href={`mailto:${config.contactEmail}?subject=Hello Constantin!`}
          >
            <StyledLink>Say Hello</StyledLink>
          </Link>
        </StyledList>
      </StyledListContainer>
      <div className="clear"></div>
    </StyledMenu>
  )
}
