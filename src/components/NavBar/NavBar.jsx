// components/NavBar.js

import Link from "next/link";
import styles from "./NavBar.module.css"; // Import the CSS module
import { signIn, signOut, useSession } from "next-auth/react";

function NavBar() {
  const { session, loading } = useSession(); // useSession is a React hook
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.textContent === "Sign In") {
      signIn("google");
    } else {
      signOut();
    }
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/dashboard" className={styles.navLink}>
            Dashboard
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/cars" className={styles.navLink}>
            All Cars
          </Link>
        </li>
        {!loading && !session && (
          <li className={styles.navItem}>
            <Link
              href="/api/auth/signin"
              className={styles.navLink}
              onClick={() => handleClick}
            >
              Sign In
            </Link>
          </li>
        )}

        {session && (
          <li className={styles.navItem}>
            <Link
              href="/api/auth/signout"
              className={styles.navLink}
              onClick={() => handleClick}
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
