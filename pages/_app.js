import React from "react";
import App from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
`;

class PickkApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Head>
          <title>CEOS</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default PickkApp;
