<script lang="ts">
	import type { Postagem } from '$lib/models/Postagem';
	import type { Usuario } from '$lib/models/Usuario';
	import { getWithToken } from '$lib/utils/apiService';
	import { authStore } from '$lib/utils/authStore';
	import { onMount } from 'svelte';

	const user = $authStore.currentUser;

	let usuario: Usuario = {} as Usuario;
	let postagens: Postagem[];

	let imageUrl = user?.foto || 'https://i.imgur.com/XEmGzkd.png';

	function handleImageError() {
		imageUrl = 'https://i.imgur.com/XEmGzkd.png'; // URL da imagem de fallback
	}

	onMount(async () => {
		usuario = await getWithToken(`/usuarios/${user?.id}`, {
			headers: {
				Authorization: user?.token
			}
		});
		postagens = usuario.postagem ?? [];
	});
</script>

<div class="bg-slate-200">
	<div class="container mx-auto py-8 space-y-6">
		<div class="flex items-center space-x-2 justify-center">
			<img
				src={imageUrl}
				on:error={handleImageError}
				alt="foto do ususario"
				class="rounded-lg border-2 border-slate-800 p-1 bg-white w-36"
			/>
			<div class="flex flex-col space-y-2">
				<p class="text-3xl text-slate-800">
					Perfil de: <span class="capitalize font-bold text-slate-950">{user?.nome}</span>
				</p>
				<p>E-mail de acesso: <span class="font-bold">{usuario.usuario}</span></p>
				<p>Total de postagens: <span class="font-bold">{usuario.postagem?.length}</span></p>
			</div>
		</div>

		<div class="grid grid-cols-3">
			{#if postagens}
				{#each postagens as post}
					<div
						class="flex flex-col space-y-4 rounded border border-slate-800 p-2 w-full mx-auto bg-white"
					>
						<div class="flex gap-3 items-center border-b-2 pb-2">
							<img
								src={imageUrl}
								on:error={handleImageError}
								alt=""
								class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
							/>
							<p class="capitalize font-semibold">{usuario.nome}</p>
							<span class="ml-auto"
								>{new Intl.DateTimeFormat('pt-BR', {
									dateStyle: 'medium',
									timeStyle: 'short',
									timeZone: 'America/Sao_Paulo'
								}).format(new Date(post.data))}</span
							>
						</div>
						<div>
							<p>{post.titulo}</p>
							<pre class="text-wrap font-sans">{post.texto}</pre>
							<p>Tema: {post.tema.descricao}</p>
						</div>
						<div class="flex gap-8">
							<button
								class="bg-indigo-600 hover:bg-indigo-800 w-full py-1 font-bold text-white rounded"
								>Editar</button
							>
							<button class="bg-red-600 hover:bg-red-800 w-full py-1 font-bold text-white rounded"
								>Apagar</button
							>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
