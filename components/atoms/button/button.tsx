import { ReactElement, HTMLAttributes } from 'react'

import { TProps } from './button.types'
import { StyledButton } from './button.styled'

export function Button(
  props: TProps & HTMLAttributes<HTMLButtonElement>
): ReactElement {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
