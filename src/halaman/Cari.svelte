<div class="container">
	<br>
	<h1 class="text-center">Cari</h1>
	<hr>
	<form on:submit|preventDefault={mulaiCari}>
		<div class="form-group">
			<input type="search" class="form-control" placeholder="Cari apa?" bind:value={cari} bind:this={elCari} name="" required>
		</div>
	</form>
	<div class="list-group">
		{#each data as x}
			<a href="#/{x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
		{/each}
	</div>
</div>
<div class="bawah">
	<a href="#/" class="btn btn-info">&#9750;</a>
</div>
<script type="text/javascript">
	import {onMount} from 'svelte'
	import {push} from 'svelte-spa-router'
	import {cekPassword} from '../cekPassword.js'
	import {apiData} from '../api.js'
	import {atas} from '@/atas.js'
	import {semuaPostingan} from '@/store.js'
	export let params
	let data = []
	let cari = ''
	let elCari
	onMount(() => {
		cekPassword()
		elCari.focus()
		cari = decodeURIComponent(params.cari)
	})
	$: data ? atas() : ""
	$: if (params){
		let yangDicari = decodeURIComponent(params.cari)
		if ($semuaPostingan == '') {
			fetch(apiData).then(x => x.json()).then(x => {
				$semuaPostingan = x
				data = x.filter(y => y.judul.toLowerCase().includes(yangDicari.toLowerCase()) || y.isi.toLowerCase().includes(yangDicari.toLowerCase()))
				if (data.length == 0) {
					data = [{
						slug: '',
						judul: `${yangDicari} tidak ditemukan`
					}]
				}
			})
		} else {
			data = $semuaPostingan.filter(y => y.judul.toLowerCase().includes(yangDicari.toLowerCase()) || y.isi.toLowerCase().includes(yangDicari.toLowerCase()))
			if (data.length == 0) {
				data = [{
					slug: '',
					judul: `${yangDicari} tidak ditemukan`
				}]
			}
		}
	}
	const mulaiCari = () => {
		push(`/cari/${encodeURIComponent(cari)}`)
	}
</script>
<style type="text/css">
	.list-group {
		margin-bottom: 80px;
	}
</style>
<svelte:head>
	<title>Cari {decodeURIComponent(params.cari)}</title>
</svelte:head>
