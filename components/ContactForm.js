import React from 'react'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {
	return (
		<form name="contact" netlify method="POST" action="/success" className={styles.container}>
			<h1>Come, relax with us</h1>
			<input type="hidden" name="form-name" value="contact" />
			<label htmlFor="name" value="name" />
			<input type="text" name="name" placeholder="name" />
			<label htmlFor="email" value="email" />
			<input type="email" name="email" placeholder="email" />
			<label htmlFor="phone" value="phone" />
			<input type="tel" name="phone" placeholder="phone" />
			<label htmlFor="message" value="message" />
			<textarea name="message" placeholder="message" />
			<button className="button" type="submit">
				Send Message
			</button>
		</form>
	)
}
