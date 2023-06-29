import ApplicationContextWrapper from 'context/ApplicationContext';
import 'styles/globals.css'
import "styles/nav.css"
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import CookieConsent from 'components/shared/CookieConsent';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry:false,
        refetchOnWindowFocus: false,
        staleTime: 3600000, //1jour
        cacheTime: 3600000, //1jour
      },
      mutations: {
        
      }
    }
  });

  return (
    <>
      <ApplicationContextWrapper>
        <QueryClientProvider client={queryClient}>
          <>
          <Component {...pageProps} />
          <CookieConsent />
          </>
        </QueryClientProvider>
      </ApplicationContextWrapper>
    </>
  )
}
