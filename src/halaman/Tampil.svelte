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
	export let params
	let data = {
		judul: '',
		waktu: '',
		isi: ''
	}
	const hapus = () => {
		let tanya = confirm('Hapus kah?')
		if (tanya) {
			fetch(apiData).then(x => x.json()).then(z => {
				z = z.filter(y => y.slug != params.slug)
				let body = new FormData
				body.append('json', JSON.stringify(z))
				fetch(`${apiData}/ubah`, {
					method: 'post',
					body
				}).then(() => push('/'))
			})
		}
	}
	onMount(() => {
		cekPassword()
		fetch(apiData).then(x => x.json()).then(x => {
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