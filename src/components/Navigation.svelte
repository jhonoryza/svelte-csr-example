<script>
	import * as config from '$lib/config';

	/**
	 * @type {HTMLElement}
	 */
	let menu;

	function toggleMenu() {
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
			return;
		}
		menu.classList.add('hidden');
	}
</script>

<!-- Navigation -->
<nav class="p-2 bg-white shadow-xl">
	<!-- hamburger -->
	<button class="outline-none menu-button sm:hidden" on:click={toggleMenu}>
		<svg
			class="w-4 text-slate-700"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 00 24 24"
			stroke="currentColor"
			><path d="m4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	<!-- menu -->
	<div bind:this={menu} class="hidden sm:block">
		<ul class="flex flex-col sm:flex-row">
			<li>
				<a class="mx-2 lowercase text-sm text-slate-700 hover:text-slate-400" href="/">
					{config.title}
				</a>
			</li>
			<li>
				<a class="mx-2 lowercase text-sm text-slate-700 hover:text-slate-400" href="/about"> About </a>
			</li>
			<li>
				<a class="mx-2 lowercase text-sm text-slate-700 hover:text-slate-400" href="/contact">
					Contact
				</a>
			</li>
			<!-- <li>
				<a
					class="mx-2 lowercase text-sm text-slate-700 hover:text-slate-400"
					href="/rss.xml"
					target="_blank"
				>
					RSS
				</a>
			</li> -->
		</ul>
	</div>
</nav>
