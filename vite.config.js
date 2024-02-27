import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'

export default defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/app.tsx'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
    react(),
    inertia({
      ssr: {
        enabled: true,
        entrypoint: 'resources/ssr.tsx',
      },
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(getDirname(import.meta.url), 'resources')}/`,
      '~/': `${resolve(getDirname(import.meta.url), '.')}/`,
    },
  },
})
