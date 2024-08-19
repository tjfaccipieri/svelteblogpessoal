<script>
	import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import '../app.css'
  import { Modals, closeModal } from 'svelte-modals'
</script>

<Navbar />

<div class="min-h-[90dvh]">
  <slot />
</div>

<Footer />

<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
  />
</Modals>