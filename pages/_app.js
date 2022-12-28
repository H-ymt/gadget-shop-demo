import PropTypes from "prop-types";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { global } from "../components/global";
import { AnimatePresence } from "framer-motion";
import createEmotionCache from "../libs/createEmotionCache";
import theme from "../components/theme";
import Layout from "../components/layout";
import "modern-css-reset/dist/reset.min.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Layout>
          <CssBaseline />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};
