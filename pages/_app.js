import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import "../styles/globals.css";

const AppLayout = dynamic(() => import("../components/layout/layout"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <title>CMS - Blogs</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  );
}