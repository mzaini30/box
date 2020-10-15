const apiPassword = 'https://mzaini30.nasihosting.com/json/41dbd69a23dbe44b26015268e595592f'
import {push} from 'svelte-spa-router'
export const cekPassword = () => {
	if (!localStorage.password) {
		push('/login')
	} else {
		fetch(apiPassword).then(x => x.json()).then(x => {
			if (localStorage.password != x) {
				push('/login')
			}
		})
	}
}