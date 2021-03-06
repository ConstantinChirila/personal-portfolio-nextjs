import { ReactElement } from 'react'
import { TProps } from './icons.types'

export function Icons({ type }: TProps): ReactElement | null {
  if (type === 'back-arrow') {
    return <Arrow />
  }
  if (type === 'logo') {
    return <Logo />
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
function Logo() {
  return (
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#5658E9" width="50" height="50" rx="25" />
        <g fill="#FFF">
          <path d="M19 24.02c0-3.89 3.168-7.02 7.103-7.02 1.968 0 3.424.603 4.762 1.808a.359.359 0 0 1 .02.545l-1.535 1.575a.347.347 0 0 1-.492 0 4.047 4.047 0 0 0-2.657-.992c-2.223 0-3.856 1.828-3.856 4.006 0 2.158 1.653 3.947 3.876 3.947.925 0 1.928-.33 2.637-.933.137-.117.393-.117.511.019l1.535 1.614c.138.136.118.389-.02.525C29.546 30.397 27.854 31 26.103 31 22.168 31 19 27.908 19 24.02z" />
          <path d="M10 24.042C10 15.708 16.86 9 25.382 9c4.304 0 7.415 1.333 10.312 3.875.384.333.384.833.043 1.167l-2.6 2.625c-.298.333-.724.333-1.065 0-1.79-1.542-4.176-2.459-6.562-2.459-5.454 0-9.502 4.459-9.502 9.709 0 5.208 4.09 9.625 9.545 9.625 2.556 0 4.73-.959 6.52-2.375.34-.292.809-.25 1.064 0l2.642 2.666c.341.292.256.834-.042 1.125C32.839 37.708 29.175 39 25.382 39 16.86 39 10 32.375 10 24.042z" />
        </g>
      </g>
    </svg>
  )
}
