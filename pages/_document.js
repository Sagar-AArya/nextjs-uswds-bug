import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <script src="/assets/uswds-2.13.3/js/uswds-init.min.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/assets/uswds-2.13.3/css/uswds.min.css"/>
            </Head>
            <body>
                <script src="/assets/uswds-2.13.3/js/uswds.min.js"></script>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
