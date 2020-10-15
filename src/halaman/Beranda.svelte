<div class="container">
	<br>
	<h1 class="text-center">Box</h1>
	<hr>
	<div class="list-group">
		{#each data as x}
			<a href="#/{x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
		{/each}
	</div>
</div>
<div class="bawah">
	<a href="#/tulis" class="btn btn-info">&#9998;</a>
</div>
<script type="text/javascript">
	import {onMount} from 'svelte'
	import {push} from 'svelte-spa-router'
	import {cekPassword} from '../cekPassword.js'
	import {apiData} from '../api.js'
	let data = []
	onMount(() => {
		cekPassword()
		fetch(apiData).then(x => x.json()).then(x => {
			data = x.reverse()
		})
	})
</script>
<style type="text/css">
	.list-group {
		margin-bottom: 80px;
	}
</style>