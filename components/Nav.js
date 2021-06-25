import React, { useState } from "react"
import Link from "next/link"
import styles from "../styles/Nav.module.css"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Nav() {
	const [navOpen, setNavOpen] = useState(false);

	function toggleNav() {
		setNavOpen(!navOpen);
	}

	return (
		<nav className={styles.container}>
			<button className={!navOpen ? styles.outerButton : styles.closed} onClick={toggleNav}>
				<FontAwesomeIcon icon={faBars} size="sm" />
			</button>

			<div className={styles.bigNav}>
				{/* <Link href="/about">
					<a>About</a>
				</Link> */}
				<Link href="/contact">
					<a>Contact</a>
				</Link>
			</div>

			<div id="mobile-nav" className={!navOpen ? styles.closed : styles.open}>
				<button className={navOpen ? styles.innerButton : styles.closed} onClick={toggleNav}>
					<FontAwesomeIcon icon={faTimes} size="sm" />
				</button>
				{/* <Link href="/about">
					<a onClick={toggleNav}>About</a>
				</Link> */}
				<Link href="/contact">
					<a onClick={toggleNav}>Contact</a>
				</Link>
			</div>

		</nav>
	)
}
