import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps
  }
  render() {
    return (
        <Html className="scroll-smooth" lang="fr">
          <Head />
          <body className='font-sans font-extralight bg-slate-100'>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
  };
}
export default AppDocument
