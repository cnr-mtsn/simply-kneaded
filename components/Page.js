import React from "react"
import Head from "next/head"
import styles from '../styles/Page.module.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import formatPath from "../utils/formatPath"

export default function Page({ children }) {
	const router = useRouter()
	const path = formatPath(router.pathname)

	return (
		<div className={styles.container}>
			<Head>
				<title>Simply Kneaded | {path}</title>
				<meta name="description" content="My personal development portfolio" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
