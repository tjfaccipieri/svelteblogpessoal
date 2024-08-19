<script lang="ts">
	import type { Tema } from '$lib/models/Tema';
	import { getWithToken, postWithToken } from '$lib/utils/apiService';
	import { authStore } from '$lib/utils/authStore';
	import { onMount } from 'svelte';

  let titulo = '';
  let texto = '';
  let tema = '';

async function handleNewPost(event: Event){
    if(event.target instanceof HTMLFormElement) {
      const postData = {
        titulo: titulo,
        texto: texto,
        tema: {
          id: tema
        },
        usuario: {
          id: $authStore.currentUser?.id
        }
      }

      console.log(postData);
      try {
        const request = await postWithToken('http://localhost:8080/postagens', postData, {
          headers: {
            Authorization: $authStore.currentUser?.token
          }
        })
        console.log(request);
      } catch (error) {
        console.log(error);
        alert('falha ao cadastrar')
      }
    }
    
  }

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

  }
})

</script>

<form on:submit|preventDefault={handleNewPost}>
  <div>
    <label for="titulo">Titulo da postagem:</label>
    <input id="titulo" type="text" name='titulo' class="formInputs" bind:value={titulo}>
  </div>
  <div>
    <label for="texto">Texto da postagem:</label>
    <textarea name="texto" id="texto" rows="4" class="formInputs resize-none" bind:value={texto}></textarea>
  </div>
  <div>
    <label for="tema">Selecione um tema para a postagem:</label>
    <select name="tema" id="tema" class="formInputs" bind:value={tema}>
      <option value="" selected hidden>Selecione o tema aqui</option>
      {#each temas as tema}
      <option value={tema.id}>{tema.descricao}</option>
      {/each}
    </select>
  </div>
  <button>cadastrar</button>
</form>