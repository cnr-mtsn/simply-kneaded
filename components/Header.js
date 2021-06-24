import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Header.module.css"

export default function Header() {
	return (
		<header className={styles.container}>
			<Link href="/">
				<a>
					<Image
						src="/textLogo.png"
						height="100"
						width="500"
						loading="eager"
						alt="Simply Kneaded Massage Therapy"
					/>
				</a>
			</Link>
			<ul className={styles.links}>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
			</ul>
		</header>
	)
}
