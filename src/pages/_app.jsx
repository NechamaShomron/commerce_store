import { React } from 'react';

// eslint-disable-next-line import/no-unresolved
import '@/styles/globals.css';
// eslint-disable-next-line no-unused-vars
import { AppProps } from 'next/app';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
