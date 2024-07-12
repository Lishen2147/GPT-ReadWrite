const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/ai', async (req, res) => {
	const { text, action } = req.body;

	// Extract OpenAI API key from environment variables
	const token = process.env.OPENAI_API_KEY;
	const authorization = `Bearer ${token}`;
	const headers = {
		'Authorization': authorization,
		'Content-Type': 'application/json'
	};

	// Define default model and message role
	let model = 'gpt-3.5-turbo';
	let messageRole = 'user';
	let gpt_prompt = text;

	// Adjust model and message role based on action
	switch (action) {
		case 'explainText':
			gpt_prompt = "Explain the follow text in short:" + text
			break;
		case 'rephraseText':
			gpt_prompt = "Rephrase the follow text:" + text
			break;
		default:
			break;
	}

	// Construct the request data based on action
	const data = {
		model: model,
		messages: [
			{ role: messageRole, content: gpt_prompt }
		]
	};

	try {
		// Make a POST request to OpenAI API
		const response = await axios.post(
			'https://api.openai.com/v1/chat/completions',
			data,
			{ headers }
		);

		// Log the response from OpenAI
		console.log('OpenAI API response:', response.data);

		// Send the response back to the client
		res.json(response.data);
	} catch (error) {
		// Log and handle errors
		console.error('Error calling OpenAI API:', error.message);
		if (error.response) {
			console.error('Error response data:', error.response.data);
			console.error('Error response status:', error.response.status);
			console.error('Error response headers:', error.response.headers);
		}
		res.status(500).send('Internal Server Error: The server encountered an error.');
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
