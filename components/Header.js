import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Header.module.css"
import Nav from './Nav'

export default function Header() {

	return (
		<header className={styles.container}>

			<Link href="/">
				<a>
					<Image
						src="/textLogo.png"
						height="120"
						width="300"
						loading="eager"
						alt="Simply Kneaded Massage Therapy"
					/>
				</a>
			</Link>

			<Nav/>

		</header>
	)
}
