export const tanggal = () => {
	let tanggalan = new Date
	return `${tanggalan.getFullYear()}-${tanggalan.getMonth() + 1}-${tanggalan.getDate()} ${tanggalan.getHours()}:${tanggalan.getMinutes()}:${tanggalan.getSeconds()}`
}