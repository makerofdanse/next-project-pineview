import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Devlog about Project Pineview the videogame" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <body>
                <header></header>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
