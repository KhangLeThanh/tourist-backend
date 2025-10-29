## **Backend README (Node.js + Express + PostgreSQL)**

````markdown
# Tourist App - Backend

This is the **backend server** for the Tourist App. Handles storing favourites and fetching restaurants/accommodations using Geoapify API.

## Features

- REST API endpoints for managing favourites:
  - `GET /api/favourite` → fetch all favourites
  - `POST /api/favourite` → add a favourite
  - `DELETE /api/favourite/:id` → remove a favourite
- PostgreSQL database for storing favourites
- Supports frontend state management with Context API
- CORS enabled for frontend access

## Tech Stack

- Node.js + Express
- PostgreSQL
- TypeScript
- Axios (optional for external API calls)
- dotenv for environment variables

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- PostgreSQL

### Installation

```bash
git clone https://github.com/KhangLeThanh/tourist-backend
cd backend
npm install
```

### Running

npx ts-node-dev src/index.ts
````
