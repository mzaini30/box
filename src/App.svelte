<script type="text/javascript"> 
	import Router from 'svelte-spa-router'
	import Beranda from './halaman/Beranda.svelte'
	import Login from './halaman/Login.svelte'
	import Tulis from './halaman/Tulis.svelte'
	import Tampil from './halaman/Tampil.svelte'
	import Edit from './halaman/Edit.svelte'
	import Cari from './halaman/Cari.svelte'
	import Loading from './Loading.svelte'
	import {isLoading} from './store.js'
	const routes = {
		'/': Beranda,
		'/login': Login,
		'/tulis': Tulis,
		'/cari/:cari': Cari,
		'/:slug': Tampil,
		'/:slug/edit': Edit
	}
</script>
{#if $isLoading}
	<Loading/>
{/if}
<Router {routes}/>
