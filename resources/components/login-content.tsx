import type { ReactNode } from 'react'

import { Logo } from './logo'

type LoginContent = {
  children: ReactNode
}

export function LoginContent({ children }: LoginContent) {
  return (
    <div className="flex items-center h-full p-4 2xl:col-span-2 lg:p-8">
      <div className="sm:mx-auto mx-6 flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="mx-auto lg:hidden">
          <Logo />
        </div>

        {children}
      </div>
    </div>
  )
}
