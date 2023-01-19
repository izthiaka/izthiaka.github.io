import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charset="utf-8" />
          <title>Izthiaka | Portfolio</title>
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="" />
          <meta property="og:type" content="" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
          <link rel="stylesheet" href="assets/scss/main.scss" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
