import { writable } from "svelte/store";

  // Criando o store
  export const authStore = writable({
    currentUser: null,
    loading: true,
  });