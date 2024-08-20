<script lang="ts">
	import type { Postagem } from "$lib/models/Postagem";

  export let post: Postagem

  let imageUrl = post.usuario?.foto || 'https://i.imgur.com/XEmGzkd.png';

  function handleImageError() {
    imageUrl = 'https://i.imgur.com/XEmGzkd.png'; // URL da imagem de fallback
  }
</script>

<div class="flex flex-col rounded border border-slate-800 p-2 w-full  mx-auto bg-white">
  <div class="flex gap-3 items-center border-b-2 pb-2">
    <img src={imageUrl} on:error={handleImageError} alt="" class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9">
    <p class="capitalize font-semibold">{post.usuario?.nome}</p>
    <span class="ml-auto">{new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(post.data))}</span>
  </div>
  <div>
    <p>{post.titulo}</p>
    <pre class="text-wrap font-sans">{post.texto}</pre>
    <p>Tema: {post.tema.descricao}</p>
  </div>
</div>