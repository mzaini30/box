btoa = require("btoa")
fs = require("fs")
file = "public/build/bundle.js"
fs.readFile(file, "utf8", (_, x) => {
	x = x.replace(/["']http.*?["']/g, y => `eval(atob("${btoa(y)}"))`)
	fs.writeFile(file, x, "utf8", () => {})
})
