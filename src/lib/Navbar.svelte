<script>
	import Profile from "./Profile.svelte";

</script>
<div class="flex bg-slate-800 text-gray-50 font-semibold py-2 text-lg">
  <div class="container mx-auto flex items-center justify-between">
    <span class="font-bold text-3xl">{'<TJ />'}</span>
    <ul class="text-lg flex gap-6">
      <li>Home</li>
      <Profile />
    </ul>
  </div>
</div>