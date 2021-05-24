import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './Navbar.module.scss';

const ActiveLink = ({ href, text }) => {
	const router = useRouter();
	return (
		<li className={router.pathname === href ? s.activeLink : s.link}>
			<Link href={href}>{text}</Link>
		</li>
	);
};

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<ActiveLink href="/" text="Home" />
				<ActiveLink href="/works" text="Works" />
				<ActiveLink href="/skills" text="Skills" />
				<ActiveLink href="/contact-me" text="Contact Me" />
			</ul>
		</nav>
	);
};

export default Navbar;
