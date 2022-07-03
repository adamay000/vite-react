import { FC, memo } from 'react'

interface Props {}

export const Component: FC<Props> = memo(() => {
  return <input type="text" />
})
