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
![Snipaste_2024-07-11_20-18-08](https://github.com/user-attachments/assets/7d07df30-c778-4e88-a19f-9c4ae4cbc6f8)
![Snipaste_2024-07-11_20-18-27](https://github.com/user-attachments/assets/f1c47a22-02a5-40af-a828-b15e279b5e78)
