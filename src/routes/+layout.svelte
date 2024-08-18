<script>
	import Footer from '$lib/Footer.svelte';
import Navbar from '$lib/Navbar.svelte';
  import '../app.css'
</script>

<Navbar />

<div class="min-h-[90dvh]">
  <slot />
</div>

<Footer />