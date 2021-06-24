import styles from '../styles/Home.module.css'
import LandingHero from '../components/LandingHero';

export default function Home() {
	return (
		<div className={styles.container}>
				<LandingHero/>
		</div>
	);
}
