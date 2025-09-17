import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <NavLink href="/" title="Home" pathname={router.pathname} />
                <NavLink href="/about" title="About" pathname={router.pathname} />
            </ul>
        </nav>
    );
}

function NavLink({ href, title, pathname }) {
    return (
        <li className={`${styles.navItem} ${pathname === href ? styles.inactive : ""}`}>
            <Link href={href}>{title}</Link>
        </li>
    );
}
