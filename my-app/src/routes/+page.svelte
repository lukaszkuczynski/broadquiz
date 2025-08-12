<script lang="ts">
	let appName = 'BroadQuiz';
	let url = 'https://jw.org';

	let elements = ['Broadcast Sep 2025', 'Broadcast Oct 2025'];

	import Likes from './Likes.svelte';
	import QuizTiles from './QuizTiles.svelte';
</script>

<h1>Welcome to {appName}</h1>
<p>Visit <a href={url}>this site</a> to watch and read really valuable stuff</p>

<Likes />

<QuizTiles {elements} />
