<div class="container">
	<br>
	<form on:submit|preventDefault={cekPassword}>
		<input type="password" class="form-control" placeholder="Apa passwordnya?" required name="" bind:this={elPassword} bind:value={inputPassword}>
	</form>
</div>
<script type="text/javascript">
	import {onMount} from 'svelte'
	import {push} from 'svelte-spa-router'
	import {apiPassword} from '../api.js'
	import {isLoading} from '../store.js'
	let elPassword
	let inputPassword = ''
	onMount(() => {
		elPassword.focus()
	})
	const cekPassword = () => {
		$isLoading = true
		fetch(apiPassword).then(x => x.json()).then(x => {
			$isLoading = false
			if (inputPassword == x) {
				localStorage.setItem('password', inputPassword)
				push('/')
			} else {
				inputPassword = ''
			}
		})
	}
</script>
<svelte:head>
	<title>Login</title>
</svelte:head>