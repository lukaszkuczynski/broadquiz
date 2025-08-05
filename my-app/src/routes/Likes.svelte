<script lang="ts">
	let clickCount = $state(1);
	let additionalMsg = $derived(getMsgByCount(clickCount));

	function getMsgByCount(count: number) {
		if (count < 3) {
			return 'Thanks.';
		} else {
			return "Woow! That's a lot. Thank u.";
		}
	}

	function increaseCount() {
		clickCount = clickCount + 1;
	}
</script>

<h3>Show me do you like it</h3>
<button onclick={increaseCount}>Clickme</button>
<p>You clicked me {clickCount} times. {additionalMsg}</p>
