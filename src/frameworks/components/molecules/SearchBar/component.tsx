import { FC, memo } from 'react'
import { Input } from '@/frameworks/components/atoms/Input'
import { Button } from '@/frameworks/components/atoms/Button'

interface Props {}

export const Component: FC<Props> = memo(() => {
  return (
    <div>
      <Input />
      <Button>Search</Button>
    </div>
  )
})
