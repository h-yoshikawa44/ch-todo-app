import { AppProps } from 'next/app';
import { Global, CacheProvider, EmotionCache } from '@emotion/react';
import { globalStyle } from '@/styles/globals';
import { TodoProvider } from '@/components/context/TodoContext';
import { createEmotionCache } from '@/lib/emotionCache';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <TodoProvider>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </TodoProvider>
    </CacheProvider>
  );
};

export default MyApp;
