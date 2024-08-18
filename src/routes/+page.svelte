<script lang="ts">
	import { getWithToken } from '$lib/utils/apiService';
  import {authStore} from '$lib/utils/authStore'
  import {onMount} from 'svelte'
  import { goto } from '$app/navigation';
	import ThemeCard from '$lib/ThemeCard.svelte';
	import type { Tema } from '$lib/models/Tema';

let temas: Tema[] = []

onMount(async () => {
  if($authStore.currentUser !== null) {
    temas = await getWithToken('/temas', {
      headers: {
        Authorization: $authStore.currentUser.token
      } 
    })
  console.log(temas);
  } else {
    goto('/login')
  }
})
  
</script>

<div class="grid grid-cols-3 container mx-auto gap-4">
  {#each temas as tema}
    <ThemeCard tema={tema} />
  {/each}
</div>