<script lang="ts">
	import type { Postagem } from "$lib/models/Postagem";

  export let post: Postagem
</script>

<div class="flex flex-col rounded border border-slate-800 p-2 w-full  mx-auto bg-white">
  <div class="flex gap-3 items-center border-b-2 pb-2">
    <img src={post.usuario?.foto} alt="" class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9">
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