<script>
  import {authStore} from './authStore'
import axios from 'axios'

let temas = []

  async function getTemas() {
    const resp = await axios.get('http://localhost:8080/temas', {
      headers: {
        Authorization: $authStore.currentUser.token
      }
    })
    temas = resp.data
  }
</script>

<button class="bg-indigo-800 p-2 rounded text-white" on:click={getTemas}>listar temas</button>

{#each temas as tema}
  <p>{tema.descricao}</p>
{/each}