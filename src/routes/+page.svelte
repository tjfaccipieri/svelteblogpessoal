<script lang="ts">
	import { getWithToken } from '$lib/utils/apiService';
  import {authStore} from '$lib/utils/authStore'
  import {onMount} from 'svelte'
  import { goto } from '$app/navigation';

let temas = []

onMount(async () => {
  if($authStore.currentUser !== null) {
      temas = await getWithToken('/temas', {
      headers: {
        Authorization: $authStore.currentUser.token
      } 
    })
    
    console.log(temas);
}else {
        goto('/login')
      }
})
  
</script>

oi
{#each temas as tema}
  <p>{tema.id} - {tema.descricao}</p>
{/each}