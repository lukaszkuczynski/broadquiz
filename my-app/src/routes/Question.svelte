<script>
	import { verify } from '$lib/quiz_prep';

	let propss = $props();

	// let question = $props('question');

	let answer = $state('');

	function onclick() {
		console.log('Clicked!');
		console.log({ answer });
		console.log(`given answer is {answer}`);
		return 'z';
	}
</script>

<h4>Question</h4>

<h5>Style: write the answer</h5>

<p class="question_body">{propss.question}</p>

<h5>Your answer</h5>
<textarea bind:value={answer}> </textarea>

<button {onclick} disabled={answer.length < 1}>Save & continue</button>
