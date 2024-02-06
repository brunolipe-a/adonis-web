import usePageProps from './use-page-props'

export default function useQuery() {
  const pageProps = usePageProps<{ qs: Record<string, string> }>()

  return pageProps.qs
}
