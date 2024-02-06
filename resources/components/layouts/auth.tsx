import type { ReactNode } from 'react'

import { AppHead } from '@/components/app-head'

import { LoginAside } from '../login-aside'
import { LoginContent } from '../login-content'

type AuthLayoutProps = {
  title?: string
  children: ReactNode
}

export function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <div className="relative flex-col items-center justify-center h-screen md:grid lg:max-w-none lg:grid-cols-2 2xl:grid-cols-5 lg:px-0">
      {title ? <AppHead title={title} /> : null}

      <LoginAside />
      <LoginContent>{children}</LoginContent>
    </div>
  )
}
