<script>
  import { closeModal } from 'svelte-modals'
	import FormPost from '$lib/postagens/FormPost.svelte';

  // provided by <Modals />
  export let isOpen

  export let title

</script>

{#if isOpen}
  <div role="dialog" class="fixed flex top-0 left-0 bottom-0 right-0 justify-center items-center bg-slate-800/70">
    <div class="w-1/3 bg-white p-4 rounded-xl flex flex-col space-y-4">
      <h2 class="font-bold text-3xl text-slate-800">{title}</h2>
      
      <FormPost />
      <div class="actions">
        <button class="bg-slate-600 w-1/5 py-2 rounded-lg font-bold text-white block ml-auto mt-8" on:click={closeModal}>OK</button>
      </div>
    </div>
  </div>
{/if}
