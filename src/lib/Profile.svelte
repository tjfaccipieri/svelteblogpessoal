<script lang="ts">
  import { writable } from 'svelte/store';
  import {authStore} from '$lib/utils/authStore'

  let user = $authStore.currentUser

  let imageUrl = user?.foto || 'https://i.imgur.com/XEmGzkd.png';

  function handleImageError() {
    imageUrl = 'https://i.imgur.com/XEmGzkd.png'; // URL da imagem de fallback
  }

  // Cria uma store reativa para o estado
  export const isOpen = writable(false);

  /* TODO: Essa function junto com o eventlistener ta quebrando o projeto, refatorar pra ajustar */
  // function handleClickOutside(event: any) {
  //   if (!event.target.closest('#dropdown')) {
  //     $isOpen = false;
  //   }
  // }

  // // Call the function when the component mounts
  // $: document.addEventListener('mousedown', handleClickOutside);
</script>

<div id="dropdown" class="relative inline-block">
  <!-- Dropdown toggle button -->
  <button on:click={() => $isOpen = !$isOpen} class="relative z-10 flex items-center  text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
    <span class="mx-1 text-lg">Perfil</span>
    <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  {#if $isOpen}
    <div 
      class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
    >
      <a href="/" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        <img alt="Profile" class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={imageUrl} on:error={handleImageError}>
        <div class="mx-1">
          <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">{user?.nome}</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">{user?.usuario}</p>
        </div>
      </a>

      <hr class="border-gray-200 dark:border-gray-700 ">

      <a href="/perfil" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        view profile
      </a>

      <a href="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Settings
      </a>

      <a href="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Keyboard shortcuts
      </a>

      <hr class="border-gray-200 dark:border-gray-700 ">

      <a href="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Company profile
      </a>

      <a href="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Team
      </a>

      <a href="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Invite colleagues
      </a>

      <hr class="border-gray-200 dark:border-gray-700 ">

      <a href="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Help
      </a>
      <a href="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Sign Out
      </a>
    </div>
  {/if}
</div>

