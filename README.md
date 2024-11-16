# SBA 320: React Web Application
## Project description
This project consists of a Home Page that would be part of a React web app that connects Talents and Clients for audio projects. For the purposes of this project, I wanted to familiarize myself with React hooks, and also experiment with streaming audio data from a third party API.

### API Reference
This project gets a list of voices from PartyHT. A proxy server was created to bypass CORS errors.
- https://docs.play.ht/reference/api-list-ultra-realistic-voices

### Approach Taken
- Create a React application using vite.
- Create a proxy Express server to bypass CORS errors.
- Get a list of pre-built voices from PartyHT using axios.
- Extracted relevant data for rendering on React components.

## Technologies used
- React
- JavaScript
- Express.js
- CSS

## How to get started
1. Clone the repo
    - **git clone https://github.com/lmfmay/SBA-320-ReactWebApp.git**

2. Change git remote url to avoid accidental pushes to base project
    - **git remote set-url origin github_username/repo_name**
    - **git remote -v # confirm the changes**

3. Download relevant packages for both client and server using npm i

4. This thirdparty API requires a userid and apikey which you can generate on the dashboard after signing up here: https://play.ht/studio/auth/login

5. Run the app locally by running 'npm run dev' in the root directory and 'npm start' in the server directory.

## Acknowledgements
Third Party API:
- https://docs.play.ht/reference/api-list-ultra-realistic-voices