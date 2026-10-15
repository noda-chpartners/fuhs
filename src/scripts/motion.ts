import 'lenis/dist/lenis.css';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector<HTMLElement>('.site-header');
const nav = document.querySelector<HTMLElement>('#site-nav');
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const desktop = window.matchMedia('(min-width: 880px)');

let lenis: Lenis | null = null;

function isMobileNav() {
	return !desktop.matches;
}

function closeNav(returnFocus = false) {
	nav?.classList.remove('is-open');
	toggle?.setAttribute('aria-expanded', 'false');
	document.body.classList.remove('nav-open');
	if (isMobileNav()) nav?.setAttribute('inert', '');
	else nav?.removeAttribute('inert');
	lenis?.start();
	if (returnFocus) toggle?.focus();
}

function openNav() {
	nav?.classList.add('is-open');
	toggle?.setAttribute('aria-expanded', 'true');
	document.body.classList.add('nav-open');
	nav?.removeAttribute('inert');
	lenis?.stop();
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

const motion = gsap.matchMedia();

motion.add('(prefers-reduced-motion: reduce)', () => {
	const onScroll = () => markHeader(window.scrollY);
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
	return () => window.removeEventListener('scroll', onScroll);
});

motion.add('(prefers-reduced-motion: no-preference)', () => {
	try {
		lenis = new Lenis({
			autoRaf: false,
			lerp: 0.085,
			wheelMultiplier: 0.95,
			touchMultiplier: 1,
		});

		lenis.on('scroll', () => {
			ScrollTrigger.update();
			if (lenis) markHeader(lenis.scroll);
		});
		markHeader(lenis.scroll);

		const tick = (time: number) => {
			lenis?.raf(time * 1000);
		};
		gsap.ticker.add(tick);
		gsap.ticker.lagSmoothing(0);

		const onAnchor = (event: Event) => {
			const link = event.currentTarget as HTMLAnchorElement;
			const id = link.getAttribute('href');
			if (!id || !lenis) return;
			const target = document.querySelector(id);
			if (!(target instanceof HTMLElement)) return;
			event.preventDefault();
			closeNav();
			lenis.scrollTo(target, { offset: id === '#top' ? 0 : -84, duration: 1.05 });
		};

		const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
		anchors.forEach((anchor) => anchor.addEventListener('click', onAnchor));

		gsap.to('[data-hero]', {
			autoAlpha: 1,
			y: 0,
			duration: 1.05,
			stagger: 0.08,
			ease: 'power3.out',
			delay: 0.08,
		});

		gsap.to('.hero-photo', {
			scale: 1,
			duration: 1.6,
			ease: 'power2.out',
		});

		ScrollTrigger.batch('[data-reveal]', {
			start: 'top 96%',
			once: true,
			onEnter: (batch) => {
				gsap.to(batch, {
					autoAlpha: 1,
					y: 0,
					duration: 0.95,
					stagger: 0.07,
					ease: 'power3.out',
					overwrite: 'auto',
				});
			},
		});

		gsap.fromTo(
			'.band-photo',
			{ yPercent: -6 },
			{
				yPercent: 6,
				ease: 'none',
				scrollTrigger: {
					trigger: '.band',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.6,
				},
			},
		);

		document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]').forEach((link) => {
			const id = link.getAttribute('href');
			if (!id || id === '#top') return;
			const section = document.querySelector(id);
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

		const refresh = () => ScrollTrigger.refresh();
		window.addEventListener('load', refresh);

		return () => {
			window.removeEventListener('load', refresh);
			anchors.forEach((anchor) => anchor.removeEventListener('click', onAnchor));
			gsap.ticker.remove(tick);
			lenis?.destroy();
			lenis = null;
		};
	} catch {
		document.documentElement.classList.remove('js');
	}
});
