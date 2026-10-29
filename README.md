# Meal Tracker

A full-stack meal tracking application: a Vue 3 client and a Node.js / Express API backed by MongoDB.

## About The Project

The repository is split into two parts:

- `client/`: a Vue 3 single-page application (Vue Router, Axios), scaffolded with Vue CLI.
- `server/`: an Express REST API (entry point `src/server.js`) storing data in MongoDB, with routes and controllers for meals, recipes, ingredients and a shopping list. A `docker-compose.yml` is provided to run a local MongoDB container.

## Built With

- Vue 3 / Vue Router / Axios
- Node.js / Express
- MongoDB (via Docker)

## Maintenance Status

This project is retained as a reference and is not actively maintained. Compatible dependency updates were applied to the server and client, but dependency vulnerabilities remain unresolved. A successful install or build does not mean it is security-clean; review dependencies and application behavior before deployment.

## Getting Started

### Prerequisites

- Node.js
- Docker (optional, for the database)

### Server

- From the `server/` directory, install the dependencies with `npm install`.
- The environment is read from `server/.env`; the committed values point to a local MongoDB instance (`PORT=8000`, `MONGO_URL=mongodb://localhost:27017`).
- Start MongoDB with `docker compose up` from the `server/` directory (or use your own instance).
- Start the API with `node src/server.js`.

### Client

- From the `client/` directory, install the dependencies with `npm install`.
- Start the development server with `npm run serve`, or build for production with `npm run build`.

## License

No license file is present in this repository.

## Contact

Dylan J. Gerrits - [GitHub](https://github.com/Dyrits)
