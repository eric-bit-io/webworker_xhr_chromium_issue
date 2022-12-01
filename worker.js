
self.addEventListener("connect", function (e) {
	console.log('connection')
	const port = e.ports[0];

	port.addEventListener("message", function (e) {
		if (e.data.file) {
			// console.log('reveived file, beginning xhr', e.data.file)
			//
			// const xhr = new XMLHttpRequest()
			// xhr.addEventListener("load", () => {
			// 	console.log("request finished")
			// })
			// xhr.addEventListener("error", () => {
			// 	console.error("request errored")
			// })
			// xhr.addEventListener("progress", () => {
			// 	console.log("progress...")
			// })
			//
			// xhr.open("PUT", "http://httpbin.org/put")

			// var byteReader = new FileReader();
			// byteReader.onload = function (e) {
			// 	console.log(e)
			// 	const bytes = e.target.result
			// 	console.log(bytes)
			// 	xhr.send(bytes)
			// };
			// byteReader.readAsArrayBuffer(e.data.file);
			// xhr.send(e.data.file)
			const stream = e.data.file.stream()
			console.log(stream)
			// stream.on("data", () => console.log("streamed some data"))
			const req = new Request('', {
				method: "PUT",
				headers: {'Content-Type': 'text/plain'},
				body: stream,
				duplex: 'half'
				// get duplex() {
				// 	duplexAccessed = true;
				// 	return 'half';
				// },
			})

			fetch(url, {
				method: 'GET',
				headers: {'X-HTTP-Method-Override': 'HEAD'},
				followRedirects: true  // Default is true anyway.
			});



			console.log({req})
			void fetch("http://httpbin.org/put", req).then(r => r.json()).then(r => console.log('done', r))
		}
	}, false);

	port.start();

}, false);