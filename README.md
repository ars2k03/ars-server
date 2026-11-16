<div align="center">

  <img src="./assets/logo.svg" alt="ars-server logo" width="110" height="110" />

  <h1>ars-server</h1>

  <p>
    <strong>A lightweight, containerized Node.js &amp; TypeScript (ESM) HTTP server</strong>
  </p>

  <p>
    <a href="https://hub.docker.com/r/ars2k03/ars-server">
      <img src="https://img.shields.io/badge/Docker%20Hub-ars2k03%2Fars--server-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Hub" />
    </a>
    <img src="https://img.shields.io/badge/Node.js-ESM-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js ESM" />
    <img src="https://img.shields.io/badge/TypeScript-5%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <a href="./LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge" alt="MIT License" />
    </a>
  </p>

  <p>
    <a href="#-run-with-docker-docker-hub">Quick Start</a> •
    <a href="#-build--run-locally-with-docker">Build Locally</a> •
    <a href="#-local-development-without-docker">Local Dev</a> •
    <a href="#-environment-variables">Config</a> •
    <a href="#-license">License</a>
  </p>

</div>

---

## ✨ Features

- **Zero-dependency HTTP Server** built on native `node:http`
- **Modern TypeScript + ESM** (`"type": "module"`, `NodeNext` resolution)
- **Containerized & Ready to Run** via Docker and published on [Docker Hub](https://hub.docker.com/r/ars2k03/ars-server)
- **Environment-driven Configuration** via `PORT`

## 📁 Project Structure

```text
ars-server/
├── assets/
│   └── logo.svg         # Project SVG logo
├── src/
│   └── server.ts        # HTTP server entry point
├── .dockerignore        # Files excluded from Docker build context
├── .env.example         # Environment variable template
├── .gitattributes       # Line-ending normalization (LF)
├── .gitignore           # Git ignored files
├── Dockerfile           # Container image definition
├── LICENSE              # MIT License
├── package.json
└── tsconfig.json
```

## 🐳 Run with Docker (Docker Hub)

Run the server anywhere without cloning the repository or installing Node.js:

```bash
docker run -d --rm -e PORT=8000 -p 8000:8000 --name ars-server ars2k03/ars-server:v1
```

Test the endpoint:

```bash
curl http://localhost:8000
```

Expected response:

```json
{
  "message": "🐳 Hello from ars-server with Docker!"
}
```

Stop the container:

```bash
docker stop ars-server
```

## 🛠️ Build & Run Locally with Docker

```bash
# Build the Docker image
docker build -t ars-server .

# Run using your local .env file
docker run -d --rm --env-file .env -p 8000:8000 --name ars-app ars-server
```

## 💻 Local Development (Without Docker)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Set `PORT=8000` in `.env`.

3. **Build and start the server:**
   ```bash
   npm run build && npm run dev
   ```

## ⚙️ Environment Variables

| Variable | Description | Example |
| :--- | :--- | :--- |
| `PORT` | Port the HTTP server listens on | `8000` |

## 📄 License

This project is licensed under the [MIT License](LICENSE).
