<script>
  import axios from 'axios'
	import { onMount } from 'svelte';

  let data = {}

  onMount(async () => {
    try {
      let response = await axios.get('https://api.github.com/users/tjfaccipieri')
      data = response.data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })

</script>

{JSON.stringify(data)}
