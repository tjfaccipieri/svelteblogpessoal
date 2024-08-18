import type { UsuarioLogin } from '$lib/models/UsuarioLogin';
import { writable } from 'svelte/store';

// Criando o store
export const authStore = writable<{
	currentUser: UsuarioLogin | null;
	loading: boolean;
}>({
	currentUser: null,
	loading: true
});
