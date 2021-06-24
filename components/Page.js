import React from "react"
import Head from "next/head"
import styles from "../styles/Page.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import formatPath from "../utils/formatPath"

export default function Page({ children }) {
	const router = useRouter()
	const path = formatPath(router.pathname)

	return (
		<>
			<Head>
				<title>Simply Kneaded | {path}</title>
				<meta name="description" content="My personal development portfolio" />
				<link rel="icon" href="/logo.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Rochester&display=swap" rel="stylesheet" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&family=Rochester&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Spartan&family=Vollkorn:ital@0;1&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
