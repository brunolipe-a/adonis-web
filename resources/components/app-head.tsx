import type { ReactNode } from 'react'

import { Head } from '@inertiajs/react'

type AppHeadProps = {
  title?: string
  children?: ReactNode
}

const APP_NAME = 'Adonis Web'
const APP_DESCRIPTION = 'Adonis Web'

export function AppHead({ title, children }: AppHeadProps) {
  const pageTitle = title ? `${title} - ${APP_NAME}` : APP_NAME

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={APP_DESCRIPTION} />
      {children}
    </Head>
  )
}
