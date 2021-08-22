import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import tawkTo from "tawkto-react";

import '../styles/globals.scss';

const tagManagerArgs = {
  gtmId: 'GTM-T3WFG57',
};
const tawkToPropertyId = "6122189cd6e7610a49b160c8";
const tawkToKey = "1fdmj09q5";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
    TagManager.initialize(tagManagerArgs);
  }, []);
  
  return <Component {...pageProps} />;
}

export default MyApp;
