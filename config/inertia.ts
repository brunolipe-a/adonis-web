import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'app_root',

  /**
   * Options to configure SSR
   */
  ssr: {
    enabled: true,
    entrypoint: 'resources/ssr.tsx',
  },

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    errors: (ctx) => ctx.session.flashMessages.get('errors'),
    qs: (ctx) => ctx.request.qs(),
    user: (ctx) => ctx.auth.user,
  },
})
