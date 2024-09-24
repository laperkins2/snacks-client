import { SnackProvider } from '@/contexts/snackContext';
import '../styles/globals.css'; // Import global styles if any

function MyApp({ Component, pageProps }) {
  return (
    <SnackProvider>
      <Component {...pageProps} />
    </SnackProvider>
  );
}

export default MyApp;
