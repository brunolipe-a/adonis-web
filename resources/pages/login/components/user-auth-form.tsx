import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { useAppForm } from '@/hooks/use-app-form'

const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string(),
})

type UserFormValue = z.infer<typeof formSchema>

export default function UserAuthForm() {
  const form = useAppForm<UserFormValue>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: UserFormValue) => {
    await form.submit('/login', data)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field, formState: { isSubmitting } }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu e-mail..."
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, formState: { isSubmitting } }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="sua senha..."
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={form.formState.isSubmitting} className="w-full ml-auto" type="submit">
            Entrar
          </Button>
        </form>
      </Form>
    </>
  )
}
