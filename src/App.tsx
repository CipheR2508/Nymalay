import React from 'react';
import {
	Phone,
	MessageCircle,
	Calendar,
	ShieldCheck,
	Stethoscope,
	HeartPulse,
	Syringe,
	MapPin,
	Clock,
	Mail,
	Award,
	Heart,
	Flower2,
	Facebook,
	Instagram,
	Sun,
	Moon,
} from 'lucide-react';

function Header(): JSX.Element {
	const [isDark, setIsDark] = React.useState<boolean>(document.documentElement.classList.contains('dark'));
	const toggleTheme = (): void => {
		const root = document.documentElement;
		const nextIsDark = !root.classList.contains('dark');
		root.classList.toggle('dark', nextIsDark);
		localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
		setIsDark(nextIsDark);
	};
	return (
		<header className="sticky top-0 z-30 w-full border-b border-rose-100/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
			<div className="mx-auto max-w-6xl px-4 py-3">
				<div className="flex items-center justify-between">
					<a href="#home" className="flex items-center gap-2 text-gray-900 dark:text-slate-100">
						<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-500 text-white shadow">
							<Flower2 className="h-5 w-5" />
						</span>
						<span className="text-base font-semibold tracking-tight">NYMALAY</span>
					</a>
					<nav className="hidden items-center gap-6 text-sm text-gray-700 dark:text-slate-300 md:flex">
						<a className="hover:text-gray-900 dark:hover:text-white" href="#about">About</a>
						<a className="hover:text-gray-900 dark:hover:text-white" href="#services">Services</a>
						<a className="hover:text-gray-900 dark:hover:text-white" href="#contact">Contact</a>
					</nav>
					<div className="flex items-center gap-2">
						<button
							onClick={toggleTheme}
							className="inline-flex items-center gap-2 rounded-full border border-rose-300 p-2 text-sm font-medium text-rose-700 hover:bg-rose-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
							aria-label="Toggle theme"
						>
							{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
						<a
							href="tel:9270467358"
							className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95"
						>
							<Phone className="h-4 w-4" /> Call Now
						</a>
						<a
							href="mailto:nerli.ishan@gmail.com"
							className="inline-flex items-center gap-2 rounded-full border border-rose-300 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
						>
							<Mail className="h-4 w-4" /> Email
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

function BrandHero(): JSX.Element {
	return (
		<section id="home" className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white dark:from-slate-900 dark:to-slate-950">
			<div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 md:py-24">
				<div className="inline-flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
					<Flower2 className="h-12 w-12 text-rose-500" />
				</div>
				<h1 className="mt-8 text-5xl font-extrabold tracking-tight text-rose-600 md:text-6xl">NYMALAY</h1>
				<p className="mt-2 text-2xl font-semibold tracking-wide text-slate-700 dark:text-slate-300 md:text-3xl">HOMOEOPATHIC CLINIC</p>
				<div className="mt-8 w-full max-w-3xl rounded-2xl border border-rose-100 bg-white p-6 text-center shadow dark:border-slate-800 dark:bg-slate-900">
					<h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Dr. Arya Nerli</h3>
					<p className="mt-1 text-slate-600 dark:text-slate-400">BHMS, CGO • Reg No. 82918</p>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
						<a href="tel:9270467358" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-5 py-3 text-sm font-medium text-white shadow">
							<Phone className="h-4 w-4" /> Call Now
						</a>
						<a href="mailto:nerli.ishan@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 ring-1 ring-rose-200 hover:bg-rose-50 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800">
							<Mail className="h-4 w-4" /> Send Email
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

function About(): JSX.Element {
	return (
		<section id="about" className="bg-gradient-to-b from-white to-rose-50/60 dark:from-slate-950 dark:to-slate-900">
			<div className="mx-auto max-w-6xl px-4 py-14">
				<h2 className="text-center text-3xl font-extrabold text-rose-600">About Dr. Arya Nerli</h2>
				<p className="mx-auto mt-3 max-w-3xl text-center text-slate-700 dark:text-slate-300">
					Dedicated to providing compassionate homoeopathic care with a natural, holistic approach.
				</p>
				<div className="mt-8 grid gap-6 md:grid-cols-3">
					<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
						<Award className="h-8 w-8 text-rose-500" />
						<h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Qualified Professional</h3>
						<p className="mt-1 text-sm text-slate-600 dark:text-slate-400">BHMS, CGO certified with registration number 82918</p>
					</div>
					<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
						<Heart className="h-8 w-8 text-rose-500" />
						<h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Holistic Care</h3>
						<p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Natural healing approach focusing on overall wellness and health</p>
					</div>
					<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
						<Stethoscope className="h-8 w-8 text-rose-500" />
						<h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Expert Treatment</h3>
						<p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Personalized homoeopathic treatments for various health conditions</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function Services(): JSX.Element {
	const items = [
		{ title: 'General Consultation', desc: 'Comprehensive health assessment and personalized plans' },
		{ title: 'Chronic Conditions', desc: 'Specialized treatment for long-term health conditions' },
		{ title: 'Pediatric Care', desc: 'Gentle homoeopathic treatments for children\'s health' },
		{ title: "Women\'s Health", desc: "Specialized care for women's unique health needs" },
		{ title: 'Preventive Care', desc: 'Maintaining health and preventing illness naturally' },
		{ title: 'Lifestyle Counseling', desc: 'Guidance for healthy living and wellness maintenance' },
	];
	return (
		<section id="services" className="bg-gradient-to-b from-rose-50/60 to-white dark:from-slate-900 dark:to-slate-950">
			<div className="mx-auto max-w-6xl px-4 py-14">
				<h2 className="text-center text-3xl font-extrabold text-rose-600">Our Services</h2>
				<p className="mx-auto mt-3 max-w-3xl text-center text-slate-700 dark:text-slate-300">Comprehensive homoeopathic treatments for your health and wellness</p>
				<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{items.map((s) => (
						<div key={s.title} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{s.title}</h3>
							<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.desc}</p>
						</div>
					))}
				</div>
				<div className="mt-12 rounded-3xl bg-gradient-to-r from-fuchsia-500 to-rose-600 p-10 text-center text-white shadow-xl">
					<div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
						<MessageCircle className="h-8 w-8" />
					</div>
					<h3 className="mt-6 text-3xl font-bold">Online Consultation Available</h3>
					<p className="mt-2 text-white/90">Call or message for convenient online consultation from the comfort of your home</p>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
						<a href="tel:9270467358" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-rose-700 shadow">
							<Phone className="h-4 w-4" /> 9270467358
						</a>
						<a href="mailto:nerli.ishan@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/40">
							<Mail className="h-4 w-4" /> Book Online
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

function Contact(): JSX.Element {
	return (
		<section id="contact" className="bg-gradient-to-b from-white to-rose-50 dark:from-slate-950 dark:to-slate-900">
			<div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
				<div className="space-y-6">
					<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 dark:bg-slate-800">
							<Phone className="h-5 w-5 text-rose-500" />
						</div>
						<p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">Phone</p>
						<p className="text-slate-600 dark:text-slate-400">9270467358</p>
					</div>
					<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 dark:bg-slate-800">
							<Mail className="h-5 w-5 text-rose-500" />
						</div>
						<p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">Email</p>
						<p className="text-slate-600 dark:text-slate-400">nerli.ishan@gmail.com</p>
					</div>
					<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 dark:bg-slate-800">
							<Clock className="h-5 w-5 text-rose-500" />
						</div>
						<p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">Consultation Hours</p>
						<p className="text-slate-600 dark:text-slate-400">Call for appointment scheduling</p>
					</div>
				</div>
				<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 dark:bg-slate-900 dark:ring-slate-800">
					<h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Send a Message</h3>
					<form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
						<input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-rose-400 dark:focus:ring-rose-900/30" placeholder="Your Name" />
						<input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-rose-400 dark:focus:ring-rose-900/30" placeholder="Your Email" type="email" />
						<textarea className="h-32 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-rose-400 dark:focus:ring-rose-900/30" placeholder="Your Message" />
						<button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95" type="submit">
							Send Message
						</button>
					</form>
				</div>
			</div>
			<div className="mx-auto max-w-6xl px-4 pb-14">
				<h3 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">Follow Us</h3>
				<div className="flex flex-wrap items-center justify-center gap-6">
					<a href="https://facebook.com/nymalayshomeopathy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:opacity-95">
						<Facebook className="h-5 w-5" /> @nymalayhomeopathy
					</a>
					<a href="https://instagram.com/nymalayhomeopathy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-600 px-6 py-3 text-white shadow hover:opacity-95">
						<Instagram className="h-5 w-5" /> Nymalay Homeopathy
					</a>
				</div>
			</div>
		</section>
	);
}

function Footer(): JSX.Element {
	return (
		<footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-slate-200">
			<div className="mx-auto max-w-6xl px-4 py-10 text-center">
				<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">
					<Flower2 className="h-6 w-6" />
				</div>
				<h4 className="mt-3 text-2xl font-extrabold tracking-wide">NYMALAY HOMOEOPATHIC CLINIC</h4>
				<p className="mt-1 text-sm text-slate-300">Dr. Arya Nerli • BHMS, CGO • Reg No. 82918</p>
				<p className="mt-4 text-sm text-slate-300">
					Phone: 9270467358 &nbsp; • &nbsp; Email: nerli.ishan@gmail.com
				</p>
				<div className="mt-8 h-px w-full max-w-5xl bg-white/10" />
				<p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} Nymalay Homoeopathic Clinic. All rights reserved.</p>
			</div>
		</footer>
	);
}

function App(): JSX.Element {
	return (
		<div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100">
			<Header />
			<BrandHero />
			<About />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
