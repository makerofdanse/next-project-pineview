import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function About() {
    return (
        <>
            <Head>
                <title>About - Project Pineview</title>
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>TODO.</main>
                <footer className={styles.footer}>Copyright (c) 2025 Daniel Behringer. All Rights Reserved.</footer>
            </div>
        </>
    );
}
