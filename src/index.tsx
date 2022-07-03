import React from 'react'
import ReactDOM from 'react-dom/client'
import { IndexPage } from '@/frameworks/components/pages/IndexPage'
import '@/frameworks/styles/base.css'

const $root = document.createElement('div')
document.body.appendChild($root)

ReactDOM.createRoot($root).render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
)
