import { FC, ReactNode, memo } from 'react'

interface Props {
  children: ReactNode
}

export const Component: FC<Props> = memo(({ children }) => {
  return <button>{children}</button>
})
