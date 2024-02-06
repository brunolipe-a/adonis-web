import { router } from '@inertiajs/react'

import { Button } from '@/components/ui/button'

import usePageProps from '@/hooks/use-page-props'

import type { User } from '@/types'

type PageProps = {
  user: User
}

export default function HomePage() {
  const { user } = usePageProps<PageProps>()

  function logout() {
    router.post('/logout')
  }

  return (
    <div>
      Logado
      <pre>{JSON.stringify(user)}</pre>
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}
