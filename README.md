# GPT-ReadWrite
A Chrome extension to explain or rephrase highlighted text using OpenAI.

## Prerequisites

1. Charged OpenAI account
- Log in to OpenAI Platform
- Create a new User API key
	- `Your Profile`
	- `User API keys (Legacy)`
	- `Create new secret key`

2. Set up `.env` file
- Create a `.env` file in `./backend/`, and write the following:
```
OPENAI_API_KEY=your_secret_key
```

## Run
1. Host backend server ...
```bash
cd backend
npm i
node server.js
```

2. Load extension ???
- Go to Google Chrome and type in the url address bar: `chrome://extensions/`
- Turn on the *Developer mode* on the top-left corner
- Click `Load unpacked` and select the folder which contains the `manifest.json` file

3. Try it !!!
Go to any blog you wanna read
Highlight some text as you wish
Right click and hover on the `GPT Text Explainer/Rephraser`
You can choose either `Explain text` or `Rephrase text`