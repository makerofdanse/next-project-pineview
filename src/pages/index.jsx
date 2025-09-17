import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Project Pineview</title>
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Welcome to the Project Pineview Lore Bible!</h1>
                    <p>This is a lore bible for the story of Pineview and everything about this town and the region!</p>
                    <hr />

                    <div className={styles.postContainer}>
                        <Post
                            title="First Concept"
                            imageSrc="/media/lily1.webp"
                            imageAlt="Portrait of a young, but roughed up girl. Prototype of Lily."
                            imageWidth={400}
                            imageHeight={400}
                            date="2023-06-05"
                            priority
                        >
                            <p>
                                So, as the first thing ever I came up with a concept of a side character. Yea. Not even
                                the main dude, or a theme. Walking around in the evening sun made me feel something
                                interesting.
                            </p>
                            <p>
                                Meet Lily. She's an artsy type. Supposed to be drawing for the heck of it in her shack,
                                located in the heart of the town. She's one of the first characters protagonist will
                                meet. She usually asks to bring her some cool photos or straight vistas for references
                                as side quests, but I thought about one slightly bigger for her story. Basically, when
                                protagonist has met the rest of the gang (4 people in total, including Lily) and has
                                achieved high enough likeness meter (or whatever the fuck I'll call this system later)
                                her story quest becomes avaiable, that sends you and the gang on a picnic that ends up
                                with stargazing, lots of amazing photographies and possibly a love interest unlock.
                                Possibly. AHEM. Welp, time to think about the rest.
                            </p>
                        </Post>

                        <Post
                            title="The Feeling"
                            imageSrc="/media/vista1.webp"
                            imageAlt="Possibly generated image of a road going through a pine forest, complete with Firewatch atmosphere"
                            imageWidth={400}
                            imageHeight={300}
                            date="2023-10-31"
                        >
                            <p>
                                This. This is an image that evokes that feeling pretty strongly. Those sexy Firewatch
                                vibes, a bit cartoony graphics, but not overtly so. A hot summer, hydrated only by
                                extreme rains. Evening glowing with gold, as if plating every tree with a layer of rust.
                                Yep. I want that. Also kinda feels like The Night in the Woods. One of those iconic
                                feels I had in my life, when I was completely alone. But honestly, I didn't feel as
                                alone then as I do now.
                            </p>
                        </Post>
                    </div>
                </main>
                <footer className={styles.footer}>Copyright (c) 2025 Daniel Behringer. All Rights Reserved.</footer>
            </div>
        </>
    );
}

function Post({ title, imageSrc, imageAlt, imageWidth, imageHeight, date, priority = false, children }) {
    return (
        <div className={styles.post}>
            {title && <h3>{title}</h3>}
            {date && <p className={styles.meta}>posted: {date}</p>}
            <Image src={`/next-project-pineview${imageSrc}`} alt={imageAlt} width={imageWidth} height={imageHeight} priority={priority} />
            <div>{children}</div>
            <hr className={styles.postDivider} />
        </div>
    );
}
