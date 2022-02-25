import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import 'focus-visible';
import { globalStyle } from '@/styles/globals';
import { TodoProvider } from '@/components/context/TodoContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </TodoProvider>
  );
}

export default MyApp;
