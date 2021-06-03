import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import s from '../styles/ContactMe.module.scss';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';

export default function Works() {
	const [ state, handleSubmit ] = useForm('mleabege');
	return (
		<div className={s.inner}>
			<Head>
				<title>Contact Me | Aniket Datta</title>
				<meta name="description" content="Hey I am Aniket Datta." />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<header className={s.header}>
				<Navbar />
			</header>
			<div className={s.main}>
				{state.succeeded ? (
					<h1 className={s.thanks}>Thanks For Contacting!!! 😃</h1>
				) : (
					<div className={s.formDiv}>
						<h1>Say Hello!</h1>
						<form onSubmit={handleSubmit}>
							<div>
								<input
									type="text"
									id="name"
									required={true}
									name="name"
									placeholder="Enter your name"
									autoComplete="name"
								/>
								<label htmlFor="name">Your Name</label>
							</div>
							<ValidationError prefix="Name" field="name" errors={state.errors} />
							<div>
								<input
									type="email"
									name="_replyto"
									id="_replyto"
									placeholder="Enter your email"
									autoComplete="email"
									required={true}
								/>
								<label htmlFor="_replyto">Your Email</label>
							</div>
							<ValidationError prefix="Email" field="email" errors={state.errors} />
							<div className={s.text}>
								<textarea
									name="message"
									id="message"
									placeholder="Enter Your Message"
									required={true}
								/>
								<label htmlFor="message">Your Message</label>
							</div>
							<ValidationError prefix="Message" field="message" errors={state.errors} />
							<input type="hidden" name="_subject" value="Contact form submitted" />
							<input type="hidden" name="_honeypot" value="" />
							<button>Beam Your Message</button>
						</form>
					</div>
				)}
			</div>
			<Footer className={s.footer} />
		</div>
	);
}
