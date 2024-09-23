// pages/_app.js
import { SnackProvider } from '@/contexts/snackContext';
import '@/styles/globals.css'; // or any other global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <SnackProvider>
      <Component {...pageProps} />
    </SnackProvider>
  );
}
