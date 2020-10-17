<script type="text/javascript">
	import {onMount} from 'svelte'
	import {cekPassword} from '../cekPassword.js'
	import {slugify} from '../slugify.js'
	import {tanggal} from '../tanggal.js'
	import {apiData} from '../api.js'
	import {push} from 'svelte-spa-router'
	import {isLoading} from '../store.js'
	export let params
	let elIsi
	let elJudul
	let judul = ''
	let isi = ''
	onMount(() => {
		elJudul.focus()
		cekPassword()
		const ukuranIsi = () => elIsi.style.height = `${window.innerHeight - 120}px`
		ukuranIsi()
		window.addEventListener('resize', ukuranIsi)
		$isLoading = true
		fetch(apiData).then(x => x.json()).then(x => {
			$isLoading = false
			x = x.filter(y => y.slug == params.slug)[0]
			judul = x.judul
			isi = x.isi
		})
	})
	const submit = () => {
		$isLoading = true
		fetch(apiData).then(x => x.json()).then(x => {
			$isLoading = false
			let index = x.findIndex(y => y.slug == params.slug)
			x[index].judul = judul
			x[index].isi = isi
			let body = new FormData
			body.append('json', JSON.stringify(x))
			$isLoading = true
			fetch(`${apiData}/ubah`, {
				method: 'post',
				body
			}).then(() => {
				$isLoading = false
				push(`/${params.slug}`)
			})
		})
	}
</script>
<form on:submit|preventDefault={submit}>
	<input type="" class="form-control" bind:value={judul} placeholder="Judul" bind:this={elJudul} name="" required>
	<textarea class="form-control" bind:value={isi} bind:this={elIsi} placeholder="Isi"></textarea>
	<div class="bawah">
		<input type="submit" class="btn btn-success" value="&check;" name="">
	</div>
</form>
<svelte:head>
	<title>Edit {judul}</title>
</svelte:head>
