import styled from 'styled-components'

import { TStyledBack } from './layout.types'

export const StyledBack = styled.div<TStyledBack>`
  background: ${({ theme }) => theme.colors.secondary};
  line-height: 0;
  border-radius: 5rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 500;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? `translate(0, 0) scale(0.7)` : `translate(0, 9rem) scale(0.7)`};
  box-shadow: 0 0.4rem 0.9rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: $primaryColor;
  }

  svg {
    transform: rotate(-90deg);
  }
`
