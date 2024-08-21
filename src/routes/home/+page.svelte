<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Postagem } from '$lib/models/Postagem';
	import PostCard from '$lib/postagens/PostCard.svelte';
	import { getWithToken } from '$lib/utils/apiService';
	import { authStore } from '$lib/utils/authStore';
	import { onMount } from 'svelte';

	import PostModal from '$lib/postagens/PostModal.svelte';
	import { openModal } from 'svelte-modals';

	function handleClick() {
		openModal(PostModal, { title: 'Nova postagem' });
	}

	let postagens: Postagem[] = [];
	let inversePosts: Postagem[] = [];

	onMount(async () => {
		if ($authStore.currentUser !== null) {
			postagens = await getWithToken('/postagens', {
				headers: {
					Authorization: $authStore.currentUser.token
				}
			});
			console.log(postagens);
			inversePosts = postagens.sort((a, b) => b.id - a.id);
			console.log(inversePosts);
		} else {
			goto('/login');
		}
	});
</script>

<div class="bg-slate-600 py-6 text-white">
	<div class="container mx-auto flex items-center justify-around">
		<div class="w-1/3 space-y-3">
			<h1 class="text-5xl text-center font-bold font-mono">Bem vindo ao SvelteBlog</h1>
			<p class="text-lg text-center font-semibold">
				Um projeto de aprendizado de Svelte feito em uma semana por Thiago Faccipieri
			</p>
			<button
				on:click={handleClick}
				class="capitalize font-semibold bg-white text-slate-800 px-4 py-2 rounded-lg border-2 border-slate-900 mx-auto block"
				>nova postagem</button
			>
		</div>
		<img src="logo.png" alt="" />
	</div>
</div>
<div class="bg-slate-100 py-6">
	<div class="container mx-auto grid grid-cols-3 gap-4">
		{#each inversePosts as post}
			<PostCard {post} />
		{/each}
	</div>
</div>
