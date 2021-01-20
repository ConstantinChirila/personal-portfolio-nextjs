import { ReactElement } from 'react'
import { TProps } from './icons.types'

export function Icons({ type }: TProps): ReactElement | null {
  if (type === 'back-arrow') {
    return <Arrow />
  }
  return null
}

function Arrow() {
  return (
    <svg width="63" height="63" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M36.88 21.007c-.402-.444-1.072-.444-1.488 0a1.174 1.174 0 0 0 0 1.571l7.544 8.047H18.042c-.58.001-1.042.493-1.042 1.112 0 .619.461 1.127 1.042 1.127h24.894l-7.544 8.032c-.402.444-.402 1.159 0 1.587.416.444 1.086.444 1.488 0l9.33-9.952a1.144 1.144 0 0 0 0-1.571l-9.33-9.953z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
