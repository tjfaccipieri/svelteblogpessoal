<script lang="ts">
  import { goto } from '$app/navigation';
  import axios from 'axios';

  async function handleRegister(event: Event){
    if(event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target);

      // Converte o FormData para um objeto JSON, se necessário
      const jsonData = Object.fromEntries(formData.entries());

      
      try {
        const request = await axios.post('http://localhost:8080/usuarios/cadastrar', jsonData)
        const response = request.data
        console.log(response);
        if(response.id !== null) {
          goto('/login')
        }
      } catch (error) {
        console.log(error);
        alert('falha ao cadastrar')
      }
    }
    
  }
</script>

<div class="bg-gradient-to-tl from-slate-400 to-slate-500 w-full h-screen flex items-center justify-center">
  <form on:submit|preventDefault={handleRegister} class="bg-gray-50 p-4 rounded-lg shadow shadow-gray-300 space-y-3 w-[95dvw] md:w-1/4">
    <h1 class="font-bold text-gray-800 text-3xl">Cadastro</h1>
    <hr class="border-2 border-gray-300" />
    <input name='nome' type="text" class="border rounded p-2 w-full font-semibold" placeholder="Nome completo">
    <input name='usuario' type="text" class="border rounded p-2 w-full font-semibold" placeholder="E-mail">
    <input name='senha' type="password" class="border rounded p-2 w-full font-semibold" placeholder="Senha">
    <input name='confirmarSenha' type="password" class="border rounded p-2 w-full font-semibold" placeholder="Confirmar senha">
    <button class="w-1/2 bg-gray-800 text-gray-50 font-bold mx-auto block py-2 rounded-xl">Cadastrar</button>
    <hr>
    <p class="text-center font-semibold text-sm text-gray-400">Já tem uma conta? <a href="/login" class="underline text-gray-800">Acesse agora</a></p>
  </form>
</div>