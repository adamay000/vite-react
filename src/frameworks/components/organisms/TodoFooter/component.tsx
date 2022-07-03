import { FC, memo } from 'react'

interface Props {}

export const Component: FC<Props> = memo(() => {
  console.log('re render 3')
  return <>Footer dayo</>
})
