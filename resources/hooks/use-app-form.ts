import { useCallback, useEffect } from 'react'
import { useForm, type FieldValues, type Path, type UseFormProps } from 'react-hook-form'

import { submit as submitForm } from '@/lib/utils'

import useErrors from './use-errors'

export function useAppForm<T extends FieldValues>(props?: UseFormProps<T>) {
  const form = useForm<T>(props)
  const errors = useErrors()

  const submit: typeof submitForm<T> = useCallback((url, data, options = {}) => {
    options.method ??= 'post'

    return submitForm(url, data, options)
  }, [])

  useEffect(() => {
    if (!errors) return

    for (const field in errors) {
      const error = errors[field]
      const message = Array.isArray(error) ? error[0] : error
      form.setError(field as unknown as Path<T>, { message }, { shouldFocus: true })
    }
  }, [errors, form])

  return { ...form, submit }
}
