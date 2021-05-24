import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.scss';
import Gravatar from 'react-gravatar';
import Social48pxGlyph1_logoFbSimple from '../components/icons/social-48px-glyph-1_logo-fb-simple';
import Social48pxGlyph1_logoInstagram from '../components/icons/social-48px-glyph-1_logo-instagram';
import Social48pxGlyph1_logoGithub from '../components/icons/social-48px-glyph-1_logo-github';
import Social48pxGlyph1_logoLinkedIn from '../components/icons/social-48px-glyph-1_logo-linkedin';
import Social48pxGlyph1_logoTwitter from '../components/icons/social-48px-glyph-1_logo-twitter';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Aniket Datta 😎 | Creative Dev</title>
				<meta name="description" content="Hey I am Aniket Datta." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.main}>
				<section className={styles.info}>
					<div className={styles.textDiv}>
						<div className={styles.text}>
							<h1>
								Hey I’m&nbsp;<br />
								<span>Aniket Datta</span>
							</h1>
							<h4>Front-End Developer</h4>
							<p>
								Don’t know much about me but mis amigos does. I’m a student, busy exploring the madness
								of life. A moviebuff, a classic rock nerd, a football fanatic. Looking to meet new
								people and get ideas.
							</p>
							<ul>
								<li>
									<a href="https://www.facebook.com/dattaaniket7/" target="_blank">
										<Social48pxGlyph1_logoFbSimple />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/a.d_floyd/" target="_blank">
										<Social48pxGlyph1_logoInstagram />
									</a>
								</li>
								<li>
									<a href="https://github.com/dattaaniket7" target="_blank">
										<Social48pxGlyph1_logoGithub />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/dattaaniket7/" target="_blank">
										<Social48pxGlyph1_logoLinkedIn />
									</a>
								</li>
								<li>
									<a href="https://twitter.com/dattaaniket7" target="_blank">
										<Social48pxGlyph1_logoTwitter />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.imgDiv}>
						<div className={styles.image}>
							<Gravatar email="datta.aniket7@gmail.com" size={256} />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
