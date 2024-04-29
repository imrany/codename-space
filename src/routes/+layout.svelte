<script>
    import { assets } from "$app/paths";
    import "./styles.css"
</script>

<div>
	<nav class="px-5 py-2 text-base shadow flex items-center justify-between">
		<a style="font-family: 'Tilt Neon';" href="/">Codename space</a>
		<div class="sm:flex sm:gap-2 sm:items-center none">
			<a href="/explore">Explore</a>
			<a href="/sign_in">Sign in</a>
			<a class="px-2 py-1 text-white rounded-md border-slate-600 bg-slate-500 " href="/get_started">Get Started</a>
		</div>
	</nav>

	<main>
		<slot></slot>
	</main>
</div>
