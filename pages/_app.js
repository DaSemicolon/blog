import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/globals.scss';

const tagManagerArgs = {
  gtmId: 'GTM-T3WFG57',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });

  return <Component {...pageProps} />;
}

export default MyApp;
