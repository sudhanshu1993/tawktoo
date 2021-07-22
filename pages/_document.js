import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>GNARIUM IQNOVATIVE PVT. LTD.</title>
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/font-awesome.css" />
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/slick.css"/>
        <link rel="stylesheet" href="css/slick-theme.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/royal-preload.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
          <script src="js/jquery.min.js"></script>
          <script src="js/slick.min.js"></script>
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="js/jquery.isotope.min.js"></script>
          <script src="js/easypiechart.js"></script>
          <script src="js/particles.min.js"></script>
          <script src="js/jquery.countdown.min.js"></script>
          <script src="js/scripts.js"></script>
          <script src="js/header-mobile.js"></script>
          <script src="js/royal_preloader.min.js"></script>
          
        </body>
      </Html>
    )
  }
}

export default MyDocument
