import usePageProps from './use-page-props'

export default function useErrors() {
  const pageProps = usePageProps<{ errors: Record<string, string | string[]> }>()

  return pageProps.errors
}
