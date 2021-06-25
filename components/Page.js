// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
import React, { useState } from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import formatPath from "../utils/formatPath"
config.autoAddCss = false;

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
