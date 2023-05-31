import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import Script from 'next/script';

class AppDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps
  }
  render() {
    return (
        <Html className="scroll-smooth" style={{scrollBehavior:'smooth'}} lang="fr">
            <Head>
            <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
             <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WQKP99D');
        `}
      </Script>
      </Head>
          <body className='font-sans font-extralight bg-white' id="accueil">
            <Main />
            <NextScript />
            <noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQKP99D"
              height="0" width="0">
                </iframe>
            </noscript>
          </body>
        </Html>
      )
  };
}
export default AppDocument
