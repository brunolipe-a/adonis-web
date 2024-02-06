import './css/app.css'

import { createRoot } from 'react-dom/client'

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
    createRoot(el).render(
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App {...props} />
      </ThemeProvider>
    )
  },
})
