import Document, { Main, NextScript } from 'next/document'
import Head from 'next/head'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>DEMO</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="/static/webcomponents-bundle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
