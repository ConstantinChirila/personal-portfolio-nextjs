import { ReactElement, useState } from 'react'

import { TProps } from './header.types'
import {
  StyledHeader,
  StyledContainer,
  StyledContainerSimple,
  StyledTitle,
  StyledTitleSimple,
  StyledTitleSpan,
  StyledDescription,
  StyledCTA,
  StyledGraphic,
  StyledSimpleGraphic,
  StyledImage,
  StyledImageSimple,
} from './header.styled'

import { config } from '@portfolio/data'
import { Menu, Button } from '@portfolio/components'
import { homepageData } from '@portfolio/data'

export function Header({ type, title }: TProps): ReactElement {
  const [showForm, setShowForm] = useState(false)
  const { header } = homepageData

  switch (type) {
    case 'simple':
      return (
        <StyledHeader>
          <StyledContainerSimple>
            <Menu />
            <StyledTitleSimple>{title}</StyledTitleSimple>
            <StyledSimpleGraphic>
              <StyledImageSimple
                src="/images/simple-header-bg.svg"
                alt="Laptop Ilustration"
              />
            </StyledSimpleGraphic>
          </StyledContainerSimple>
        </StyledHeader>
      )

    case 'complex':
      return (
        <StyledHeader>
          <StyledContainer>
            <Menu />
            <StyledTitle>
              <StyledTitleSpan>Hello, I'm Constantin</StyledTitleSpan>Frontend{' '}
              <br /> Web Developer <br />
              and UX/UI Designer
            </StyledTitle>
            <StyledDescription>{header.description}</StyledDescription>
            <Button typeof="button" onClick={() => setShowForm(true)}>
              {header.button.name}
            </Button>
            <StyledCTA
              href={`mailto:${config.contactEmail}?subject=I have a question!`}
            >
              {header.link.name}
            </StyledCTA>
            <StyledGraphic>
              <StyledImage
                src="/images/laptop-graphic.png"
                alt="Front End Developer Graphic"
              />

              <svg width="775" height="704" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    x1="79.402%"
                    y1="19.766%"
                    x2="27.569%"
                    y2="84.918%"
                    id="a"
                  >
                    <stop stopColor="#79BFFE" offset="0%" />
                    <stop stopColor="#5658E9" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  transform="translate(-715 -20)"
                  fill="url(#a)"
                  fillRule="evenodd"
                >
                  <path
                    d="M998.021 27.01c62.409-8.771 124.432 80.79 168.699 89.258 44.266 8.47 164.93-30.524 197.386 43.514 32.455 74.038-40.035 118.397-29.613 192.552 10.422 74.155 56.252 92.056 28.69 145.352-27.563 53.296-72.538 29.594-120.99 73.47-48.453 43.875-24.167 128.624-99.07 145.945-74.903 17.32-61.227-59.26-141.104-75.125-79.876-15.866-122.444 51.185-193.903-5.97-71.46-57.154 10.052-139.578-7.266-208.674-17.318-69.096-91.52-97.76-84.824-167.845 6.696-70.086 84.65-67.436 145.222-111.071C921.82 104.78 935.612 35.78 998.021 27.01z"
                    fillOpacity=".1"
                  />
                  <path d="M1181.574 21.542c62.065 10.944 93.377 115.287 132.86 137.02 39.483 21.734 166.29 21.937 174.278 102.38 7.988 80.445-74.662 100.231-87.665 173.977-13.003 73.746 25.052 104.934-17.63 147.104-42.683 42.17-78.133 5.73-137.773 32.486-59.639 26.755-62.73 114.861-139.32 108.188-76.589-6.673-39.918-75.28-110.982-115.052-71.065-39.772-132.269 10.843-182.569-65.596-50.3-76.44 52.692-129.64 57.574-200.707 4.881-71.065-56.832-121.256-28.806-185.842 28.026-64.586 101.347-37.977 172.438-60.759 71.09-22.783 105.53-84.142 167.595-73.199z" />
                </g>
              </svg>
            </StyledGraphic>
          </StyledContainer>
          {/* {showForm && (
            <Portal>
              <Modal
                title="Say hello!"
                handleClose={() => setShowForm(false)}
              />
            </Portal>
          )} */}
        </StyledHeader>
      )

    default:
      return (
        <StyledHeader>
          <StyledContainerSimple>
            {' '}
            <Menu />{' '}
          </StyledContainerSimple>
        </StyledHeader>
      )
  }
}
