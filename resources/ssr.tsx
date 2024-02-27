import ReactDOMServer from 'react-dom/server'

import { createInertiaApp } from '@inertiajs/react'

export default function render(page) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
      return pages[`./pages/${name}.tsx`] || pages[`./pages/${name}/page.tsx`]
    },
    setup({ App, props }) {
      return <App {...props} />
    },
  })
}
