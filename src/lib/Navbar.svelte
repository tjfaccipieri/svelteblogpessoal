<script>
	import Profile from "./Profile.svelte";
  import {authStore} from '$lib/utils/authStore'
</script>

{#if $authStore.currentUser !== null}
  <div class="flex bg-slate-800 text-gray-50 font-semibold py-2 text-lg">
    <div class="container mx-auto flex items-center justify-between">
      <span class="font-bold text-3xl">{'<TJ />'}</span>
      <div class="text-lg flex gap-6">
        <a href='/home'>Home</a>
        <Profile />
      </div>
    </div>
  </div>
  {:else}
  <div class="flex bg-slate-800 text-gray-50 font-semibold py-2 text-lg">
    <div class="container mx-auto flex items-center justify-between">
      <span class="font-bold text-3xl">{'<TJ />'}</span>
      <div class="text-lg flex gap-6">
        <a href='/login'>Login</a>
      </div>
    </div>
  </div>
{/if}

