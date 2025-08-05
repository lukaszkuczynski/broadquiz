<script lang="ts">
	let appName = 'BroadQuiz';
	let url = 'https://jw.org';

	import Likes from './Likes.svelte';
</script>

<h1>Welcome to {appName}</h1>
<p>Visit <a href={url}>this site</a> to watch and read really valuable stuff</p>

<Likes />
