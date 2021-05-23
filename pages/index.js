import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.scss';
import Gravatar from 'react-gravatar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Aniket Datta 😎 | Creative Dev</title>
				<meta name="description" content="Hey I am Aniket Datta." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<div className={styles.image}>
					<Gravatar email="datta.aniket7@gmail.com" size={256} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
