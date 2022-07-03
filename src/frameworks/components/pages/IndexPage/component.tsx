import { FC, useState, useCallback, useMemo } from 'react'
import { DefaultTemplate } from '@/frameworks/components/templates/DefaultTemplate'
import { TodoHeader } from '@/frameworks/components/organisms/TodoHeader'
import { TodoFooter } from '@/frameworks/components/organisms/TodoFooter'

interface Props {}

export const Component: FC<Props> = () => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((c) => c + 1), [])

  const header = useMemo(() => <TodoHeader />, [])
  const footer = useMemo(() => <TodoFooter />, [])

  return (
    <>
      <button onClick={increment}>{count}</button>
      <DefaultTemplate header={header} footer={footer}>
        main dayo
      </DefaultTemplate>
    </>
  )
}
