import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <Nav />
            </header>
            <Component {...pageProps} />
        </>
    );
}
