import PropTypes from "prop-types";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Global } from "@emotion/react";
import { global } from "../components/global";
import createEmotionCache from "../libs/createEmotionCache";
import Layout from "../components/layout";
import "modern-css-reset/dist/reset.min.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Global styles={global} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
