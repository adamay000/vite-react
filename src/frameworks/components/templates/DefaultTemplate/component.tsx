import { FC, ReactNode, memo } from 'react'

interface Props {
  header: ReactNode
  footer: ReactNode
  children: ReactNode
}

export const Component: FC<Props> = memo(({ header, footer, children }) => {
  console.log('re render')
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  )
})
