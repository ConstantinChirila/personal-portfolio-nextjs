import styled, { css } from 'styled-components'
import { TProps } from './button.types'

export const StyledButton = styled.button<TProps>`
  background-image: linear-gradient(
    32deg,
    ${({ theme }) => theme.colors.primary} 20%,
    ${({ theme }) => theme.colors.primaryGradient} 120%
  );
  box-shadow: 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 6rem;
  border: 0;
  font-family: $headerFontFamilyBold;
  font-size: 1.8rem;
  color: #fff;
  padding: 1.2rem 3rem;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      32deg,
      ${({ theme }) => theme.colors.secondary} 0%,
      ${({ theme }) => theme.colors.secondaryGradient} 100%
    );
    opacity: 0;
    z-index: -1;
    border-radius: 6rem;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
    cursor: no-drop;
  }

  ${({ isSmall, hasOutline, theme }) => {
    if (hasOutline) {
      return css`
        background: #fff;
        border: 2px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        box-shadow: none;
        padding: ${isSmall ? `8px 24px` : `10px 26px`};
        ${isSmall
          ? css`
              font-size: 1.6rem;
            `
          : ''}
      `
    } else if (isSmall) {
      return css`
        font-size: 1.6rem;
        padding: 10px 25px;
      `
    }
    return ''
  }}
`
