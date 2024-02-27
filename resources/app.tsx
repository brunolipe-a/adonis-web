import { hydrateRoot } from 'react-dom/client'

import { createInertiaApp } from '@inertiajs/react'

import { ThemeProvider } from '@/providers/theme-provider'

createInertiaApp({
  progress: {
    color: '#16a34a',
  },
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    return pages[`./pages/${name}.tsx`] || pages[`./pages/${name}/page.tsx`]
  },
  setup({ el, App, props }) {
    hydrateRoot(
      el,
      <ThemeProvider storageKey="vite-ui-theme">
        <App {...props} />
      </ThemeProvider>
    )
  },
})
