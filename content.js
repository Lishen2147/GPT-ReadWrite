const backendURL = 'http://localhost:3000/ai'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "explainText" || request.action === "rephraseText") {
		fetch(backendURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text: request.text,
				action: request.action
			})
		})
			.then(response => {
				if (!response.ok) {
					// Handle different HTTP status codes
					switch (response.status) {
						case 400:
							throw new Error('Bad Request: The server could not understand the request due to invalid syntax.');
						case 401:
							throw new Error('Unauthorized: Access is denied due to invalid credentials.');
						case 403:
							throw new Error('Forbidden: You do not have permission to access this resource.');
						case 404:
							throw new Error('Not Found: The requested resource could not be found.');
						case 500:
							throw new Error('Internal Server Error: The server has encountered a situation it doesn\'t know how to handle.');
						default:
							throw new Error(`Unexpected Error: ${response.status} ${response.statusText}`);
					}
				}
				return response.json();
			})
			.then(data => {
				alert(data.choices[0].message.content);
			})
			.catch(error => {
				console.error('Error:', error);
				alert(`There was an error processing your request: ${error.message}`);
			});
	}
});
