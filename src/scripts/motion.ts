import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector<HTMLElement>('.site-header');
const nav = document.querySelector<HTMLElement>('#site-nav');
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const desktop = window.matchMedia('(min-width: 880px)');

function isMobileNav() {
	return !desktop.matches;
}

function closeNav(returnFocus = false) {
	nav?.classList.remove('is-open');
	toggle?.setAttribute('aria-expanded', 'false');
	document.body.classList.remove('nav-open');
	if (isMobileNav()) nav?.setAttribute('inert', '');
	else nav?.removeAttribute('inert');
	if (returnFocus) toggle?.focus();
}

function openNav() {
	nav?.classList.add('is-open');
	toggle?.setAttribute('aria-expanded', 'true');
	document.body.classList.add('nav-open');
	nav?.removeAttribute('inert');
	const first = nav?.querySelector<HTMLAnchorElement>('a');
	first?.focus();
}

function setupNav() {
	if (!nav || !toggle) return;
	closeNav();

	toggle.addEventListener('click', () => {
		const open = toggle.getAttribute('aria-expanded') === 'true';
		if (open) closeNav();
		else openNav();
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeNav(true);
	});

	desktop.addEventListener('change', () => closeNav());
}

function markHeader(y: number) {
	header?.classList.toggle('is-scrolled', y > 8);
}

setupNav();

// Native anchor scrolling respects the header offset and keeps browser history usable.
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', () => closeNav());
});

const onScroll = () => markHeader(window.scrollY);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]').forEach((link) => {
	const id = link.getAttribute('href');
	const section = id ? document.querySelector(id) : null;
	if (!section) return;
	ScrollTrigger.create({
		trigger: section,
		start: 'top 42%',
		end: 'bottom 42%',
		onToggle: (self) => {
			if (self.isActive) link.setAttribute('aria-current', 'location');
			else link.removeAttribute('aria-current');
		},
	});
});

const motion = gsap.matchMedia();

function clearLoader() {
	document.getElementById('loader')?.remove();
	document.documentElement.classList.remove('is-loading');
}

function revealHero() {
	gsap.to('[data-hero]', {
		autoAlpha: 1,
		y: 0,
		duration: 1.05,
		stagger: 0.08,
		ease: 'power3.out',
		delay: 0.08,
	});
}

motion.add('(prefers-reduced-motion: reduce)', () => {
	clearLoader();
});

motion.add('(prefers-reduced-motion: no-preference)', () => {
	try {
		void playLoader().catch(() => {
			document.documentElement.classList.remove('js');
			clearLoader();
		});

		ScrollTrigger.batch('[data-reveal]', {
			start: 'top 99%',
			once: true,
			onEnter: (batch) => {
				gsap.to(batch, {
					autoAlpha: 1,
					y: 0,
					duration: 0.4,
					stagger: 0.03,
					ease: 'power3.out',
					overwrite: 'auto',
				});
			},
		});

		const refresh = () => ScrollTrigger.refresh();
		window.addEventListener('load', refresh);

		return () => {
			window.removeEventListener('load', refresh);
		};
	} catch {
		document.documentElement.classList.remove('js');
		clearLoader();
	}
});

async function playLoader() {
	const loader = document.getElementById('loader');
	if (!loader) {
		revealHero();
		return;
	}

	loader.classList.add('is-held');

	const image = loader.querySelector('img');
	const fontReady = document.fonts?.ready ?? Promise.resolve();
	const imageReady =
		!image || image.complete
			? Promise.resolve()
			: new Promise<void>((resolve) => {
					image.addEventListener('load', () => resolve(), { once: true });
					image.addEventListener('error', () => resolve(), { once: true });
				});

	await Promise.race([
		Promise.all([fontReady, imageReady]),
		new Promise((resolve) => window.setTimeout(resolve, 1400)),
	]);

	if (!loader.isConnected) {
		revealHero();
		return;
	}

	let released = false;
	let failSafe = 0;
	const release = (force: boolean) => {
		if (released) return;
		released = true;
		window.clearTimeout(failSafe);
		if (force) {
			gsap.killTweensOf(loader);
			gsap.set('[data-hero]', { autoAlpha: 1, y: 0 });
		}
		clearLoader();
		ScrollTrigger.refresh();
	};

	failSafe = window.setTimeout(() => release(true), 6500);

	gsap
		.timeline({ defaults: { ease: 'power3.out' }, onComplete: () => release(false) })
		.fromTo('.loader-logo', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.8 })
		.fromTo(
			'.loader-line',
			{ scaleX: 0 },
			{ scaleX: 1, duration: 0.5, ease: 'power2.inOut', transformOrigin: 'center center' },
			'-=0.32',
		)
		.fromTo('.loader-place', { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.45 }, '-=0.28')
		.to('.loader', { yPercent: -100, duration: 0.9, ease: 'power3.inOut' }, '+=0.32')
		.addLabel('reveal', '<0.2')
		.to('[data-hero]', { autoAlpha: 1, y: 0, duration: 1.05, stagger: 0.08 }, 'reveal');
}
