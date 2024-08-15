<script lang='ts'>
  import axios from 'axios';

  async function handleLogin(event: Event) {
    if(event.target instanceof HTMLFormElement) {
       // Constrói o objeto FormData
      const formData = new FormData(event.target);

      // Converte o FormData para um objeto JSON, se necessário
      const jsonData = Object.fromEntries(formData.entries());

      // URL da API para enviar os dados
      const url = 'http://localhost:8080/usuarios/logar';

      try {
        const resp = await axios.post(url, jsonData)
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    
  }
</script>

<div class="bg-gradient-to-tl from-slate-400 to-slate-500 w-full h-screen flex items-center justify-center">
  <form on:submit|preventDefault={handleLogin} class="bg-gray-50 p-4 rounded-lg shadow shadow-gray-300 space-y-3 w-[95dvw] md:w-1/4">
    <h1 class="font-bold text-gray-800 text-3xl">Login</h1>
    <hr class="border-2 border-gray-300" />
    <input name="usuario" type="text" class="border rounded p-2 w-full font-semibold" placeholder="E-mail">
    <input name="senha" type="password" class="border rounded p-2 w-full font-semibold" placeholder="Senha">
    <button type="submit" class="w-1/2 bg-gray-800 text-gray-50 font-bold mx-auto block py-2 rounded-xl">Logar</button>
    <hr>
    <p class="text-center font-semibold text-sm text-gray-400">Ainda não tem uma conta? <a href="/cadastro" class="underline text-gray-800">Cadastre-se</a></p>
  </form>
</div>
