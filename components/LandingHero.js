import React from "react"
import styles from "../styles/LandingHero.module.css"
import Image from "next/image"
import GlassCard from "./GlassCard"

export default function LandingHero() {
	return (
		<GlassCard>
			<div className={styles.landingHeaders}>
				<h1>It&apos;s nice to be kneaded...</h1>
				<h2 className={styles.subHeader}>Relax. Renew. Revive.</h2>
			</div>

			<div className={styles.landingMedia}>
				<Image className={styles.lotusImage} src="/lotus.png" alt="lotus flower" height="120" width="120" />
				<button
				className="button"
				>Schedule a Massage</button>
			</div>
			</GlassCard>
	)
}

