// pages/_app.js
import '@/styles/globals.css'; // Global styles for your app
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
