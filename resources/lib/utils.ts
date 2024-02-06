import { router } from '@inertiajs/react'
import type { FormDataConvertible, VisitOptions } from '@inertiajs/core'

import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

type SubmitErrors<T> = Record<keyof T, string | string[]>

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function maskCpfCnpj(v?: string) {
  if (!v) return ''

  v = v.replace(/\D/g, '').slice(0, 14)

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    v = v.replace(/^(\d{2})(\d)/, '$1.$2')
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
    v = v.replace(/(\d{4})(\d)/, '$1-$2')
  }

  return v
}

export function removeMask(value: string): string {
  return value.replace(/\D/g, '')
}

export function submit<T extends object>(
  url: URL | string,
  data?: Record<Partial<keyof T>, FormDataConvertible> | FormData,
  options: Exclude<VisitOptions, 'data'> = {}
) {
  const info = {
    wasSuccessful: false,
    errors: undefined as SubmitErrors<T> | undefined,
  }

  return new Promise<typeof info>((resolve) => {
    const localOption: VisitOptions = {
      ...options,
      onSuccess: (page) => {
        info.wasSuccessful = true

        if (options.onSuccess) {
          return options.onSuccess(page)
        }
      },
      onError: (errors) => {
        info.errors = errors as SubmitErrors<T>
        info.wasSuccessful = false

        if (options.onError) {
          return options.onError(errors)
        }
      },
      onStart: (visit) => {
        info.wasSuccessful = false

        if (options.onStart) {
          return options.onStart(visit)
        }
      },
      onFinish: (visit) => {
        if (options.onFinish) {
          options.onFinish(visit)
        }

        return resolve(info)
      },
    }

    localOption.data = data

    return router.visit(url, localOption)
  })
}
