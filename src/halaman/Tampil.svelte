<div class="container">
	<br>
	<h1 class="text-center">{data.judul}</h1>
	<hr>
	<p><code>{data.waktu}</code></p>
	<div class="isinya">
		{@html data.isi}
	</div>
</div>
<div class="bawah">
	<div on:click={hapus} class="btn btn-danger">&times;</div>
	<a href="#/{params.slug}/edit" class="btn btn-warning">&#9997;</a>
	<a href="#/" class="btn btn-success">&#9750;</a>
</div>
<script type="text/javascript">
	import {onMount} from 'svelte'
	import {apiData} from '../api.js'
	import {cekPassword} from '../cekPassword.js'
	import {push} from 'svelte-spa-router'
	import {isLoading} from '../store.js'
	export let params
	let data = {
		judul: '',
		waktu: '',
		isi: ''
	}
	const hapus = () => {
		let tanya = confirm('Hapus kah?')
		if (tanya) {
			$isLoading = true
			fetch(apiData).then(x => x.json()).then(z => {
				$isLoading = false
				z = z.filter(y => y.slug != params.slug)
				let body = new FormData
				body.append('json', JSON.stringify(z))
				$isLoading = true
				fetch(`${apiData}/ubah`, {
					method: 'post',
					body
				}).then(() => {
					$isLoading = false
					push('/')
				})
			})
		}
	}
	onMount(() => {
		cekPassword()
		$isLoading = true
		fetch(apiData).then(x => x.json()).then(x => {
			$isLoading = false
			x = x.filter(y => y.slug == params.slug)
			data = x[0]
			data.isi = marked(x[0].isi)
		})
	})
</script>
<style type="text/css">
	.isinya {
		margin-bottom: 75px;
	}
</style>
<svelte:head>
	<title>{data.judul}</title>
</svelte:head>