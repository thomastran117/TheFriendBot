# TheFriendBot

A simple full stack application that simulates a messaging system with OpenAI API.

## Tech Stack

- Frontend: TypeScript, React, Tailwind, HTML, CSS
- Backend: Python, Flask

## Requirements

To run the application, you need to following:

- **Node.js** (latest version) - [Download Node.js](https://nodejs.org)
- **Python** - [Download Python](https://www.python.org/downloads/)
- **Docker** (optional) - [Download Docker](https://www.docker.com/products/docker-desktop)

Verify the installation is successful via:

```bash
node --version
python --version
```

## How to run

### Frontend

Run the following commands

```bash
cd frontend
npm install
npm run dev
```

The frontend/website is avaliable at https://localhost/5173

### Backend

Run the following commands (recommended to run in a virtual environment to isolate dependencies) 
```bash
cd backend
pip install flask openai dotnet-env flask-cors
python app.py
```

**Please note that the OpenAI API does not work when you immediately clone the repo due to the lack of the .env file containing the key, you need your own**

### Docker (optional)

Verify docker is installed properly using:
```bash
docker --version
```

Run the following command to build the container:
```bash
docker-compose up --build
```

The docker app is avaliable at http://localhost:3000

## Application Feature
- A simple messaging system that communicates with the OpennAI API using RESTFUL apis
- A delete button to delete the current messages

## UI Screenshots

### Home Page

![ui1](https://github.com/user-attachments/assets/3fa2204f-606e-485e-a770-38795071428a)

### Chat page example use

![ui2](https://github.com/user-attachments/assets/38b7c4e9-12fc-4c56-ba41-f405c4864baf)





