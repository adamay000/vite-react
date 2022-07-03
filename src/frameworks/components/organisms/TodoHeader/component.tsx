import { FC, memo } from 'react'
import { SearchBar } from '@/frameworks/components/molecules/SearchBar'

interface Props {}

export const Component: FC<Props> = memo(() => {
  console.log('re render 2')
  return (
    <>
      <h1 className="flex text-3xl">Todo App</h1>
      <SearchBar />
    </>
  )
})
