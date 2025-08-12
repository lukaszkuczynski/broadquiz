<script>
	let props = $props();
</script>

<h3>Choose your quiz</h3>
<ul>
	{#each props.elements as element}
		<li>{element}</li>
	{/each}
</ul>
