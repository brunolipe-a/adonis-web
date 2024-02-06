import { AuthLayout } from '@/components/layouts/auth'

import UserAuthForm from './components/user-auth-form'

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Entrar na sua conta</h1>
        <p className="text-sm text-muted-foreground">
          Utilize e-mail e senha para acessar sua conta
        </p>
      </div>
      <UserAuthForm />
    </AuthLayout>
  )
}
