<script lang="ts">
  export let tema
</script>

<div class="border-2 border-gray-800 rounded-lg p-2 ">
  <p>Tema {tema.id}</p>
  <p>{tema.descricao}</p>
  <div class="flex">
    <button class="w-full text-white hover:bg-blue-800 bg-blue-600 font-bold uppercase">editar</button>
    <button class="w-full text-white hover:bg-red-800 bg-red-600 font-bold uppercase">apagar</button>
  </div>
</div>