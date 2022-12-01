
self.addEventListener("connect", function (e) {
	console.log('connection')
	const port = e.ports[0];

	port.addEventListener("message", function (e) {
		if (e.data.file) {
			console.log('received file, beginning xhr', e.data.file)

			const xhr = new XMLHttpRequest()

			xhr.addEventListener("load", () => {
				console.log("request finished")
			})
			xhr.addEventListener("error", () => {
				console.error("request errored")
			})
			xhr.addEventListener("progress", () => {
				console.log("progress...")
			})

			xhr.open("PUT", "http://httpbin.org/put")

			xhr.send(e.data.file)
		}
	}, false);

	port.start();

}, false);