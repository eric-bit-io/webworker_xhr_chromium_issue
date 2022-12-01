## XHR PUT requests with File passed from non-spawning tab fail with net::access_denied error

### Steps to reproduce

1. Clone this repo
2. Serve index.html and navigate to it
3. Open worker inspector chrome://inspect/workers#workers
4. Choose a file with the file input
5. Observe upload complete successfully
6. Open a new tab open to the same page, use file selector to select a _different_ file
7. Observe PUT request rejected in the worker's console
