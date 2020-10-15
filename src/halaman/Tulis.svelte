<script type="text/javascript">
	import {onMount} from 'svelte'
	import {cekPassword} from '../cekPassword.js'
	import {slugify} from '../slugify.js'
	import {tanggal} from '../tanggal.js'
	import {apiData} from '../api.js'
	import {push} from 'svelte-spa-router'
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
	})
	const submit = () => {
		fetch(apiData).then(x => x.json()).then(x => {
			x.push({
				waktu: tanggal(),
				judul,
				isi,
				slug: slugify(judul)
			})
			let body = new FormData
			body.append('json', JSON.stringify(x))
			fetch(`${apiData}/ubah`, {
				method: 'post',
				body
			}).then(() => push(`/${slugify(judul)}`))
		})
	}
</script>
<form on:submit|preventDefault={submit}>
	<input type="" class="form-control" bind:value={judul} placeholder="Judul" bind:this={elJudul} name="" required>
	<textarea class="form-control" bind:value={isi} bind:this={elIsi} placeholder="Isi"></textarea>
	<div class="bawah">
		<input type="submit" class="btn btn-success" value="&check;" name="">
		<a href="#/" class="btn btn-info">&#9750;</a>
	</div>
</form>