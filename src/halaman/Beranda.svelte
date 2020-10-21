<div class="container">
	<br>
	<h1 class="text-center">Box</h1>
	<hr>
	<form on:submit|preventDefault={mulaiCari}>
		<div class="form-group">
			<input type="search" class="form-control" placeholder="Cari apa?" bind:value={cari} name="" required>
		</div>
	</form>
	<div class="list-group">
		{#each data as x}
			<a href="#/{x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
		{/each}
	</div>
</div>
<div class="bawah">
	<div on:click={keluar} class="btn btn-danger">&#9986;</div>
	<a href="#/tulis" class="btn btn-info">&#9998;</a>
</div>
<script type="text/javascript">
	import {onMount} from 'svelte'
	import {push} from 'svelte-spa-router'
	import {cekPassword} from '../cekPassword.js'
	import {apiData} from '../api.js'
	import {atas} from '@/atas.js'
	import {isLoading, semuaPostingan} from '../store.js'
	let data = []
	let cari = ''
	$: data ? atas() : ""
	onMount(() => {
		cekPassword()
		if ($semuaPostingan == ""){
		 $isLoading = true
	  	 fetch(apiData).then(x => x.json()).then(x => {
			$isLoading = false
			data = x
			$semuaPostingan = x
		 })
		} else {
			data = $semuaPostingan
		}
	})
	const mulaiCari = () => {
		push(`/cari/${encodeURIComponent(cari)}`)
	}
	const keluar = () => {
		localStorage.removeItem('password')
		push('/login')
	}
</script>
<style type="text/css">
	.list-group {
		margin-bottom: 80px;
	}
</style>
<svelte:head>
	<title>Box</title>
</svelte:head>
