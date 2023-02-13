<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

    let correct = form ? form.correct : 0;
</script>
<h1>{correct}</h1>
