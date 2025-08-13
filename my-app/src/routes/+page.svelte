<script lang="ts">
	let appName = 'BroadQuiz';
	let url = 'https://jw.org';

	let elements = ['Broadcast Sep 2025', 'Broadcast Oct 2025'];

	import Likes from './Likes.svelte';
	import Question from './Question.svelte';
	import QuizTiles from './QuizTiles.svelte';

	import { get_questions } from '$lib/quiz_prep';
	let questions = $state(get_questions('any'));
</script>

<h1>Welcome to {appName}</h1>
<p>Visit <a href={url}>this site</a> to watch and read really valuable stuff</p>

<Likes />

<QuizTiles {elements} />

<h1>quiz is here</h1>

{#each questions as q}
	<Question question={q.questionText}></Question>
{/each}
