<script>
  const ano = new Date().getFullYear();

  import { Icon } from 'svelte-icons-pack';
  import { IoLogoGithub } from "svelte-icons-pack/io";
</script>

<footer class="bg-purple-950 text-gray-50 font-semibold py-2 text-lg">
  <div class="container mx-auto">
    <h4 class="flex items-center gap-2 justify-center">Todos os direitos reservados. Thiago Faccipieri @ {ano}  
      <div class="hover:text-gray-500 cursor-pointer transition-colors">
        <Icon src={IoLogoGithub} size="32" />
      </div>
    </h4>
  </div>
</footer>