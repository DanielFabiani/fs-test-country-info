# Countries App

A full-stack web application for displaying country information, built with **NestJS** for the backend, **Next.js** for the frontend, and styled using **Tailwind CSS**. The backend runs on port `4000`, and the frontend runs on port `3000`.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Usage](#frontend-usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch and display a list of countries.
- View detailed information about a selected country.
- Search countries by name.
- Responsive design using Tailwind CSS.
- Full API integration between NestJS and Next.js.

## Tech Stack

- **Backend**: NestJS (Node.js framework)
- **Frontend**: Next.js (React framework)
- **Styling**: Tailwind CSS
- **Data Fetching**: REST API
- **Database**: (Optional - Depending on whether you use a database to store country data)

## Requirements

- **Node.js** (v21 or higher)
- **npm** (v6 or higher) or **yarn**

## Installation

### Backend (NestJS)

1. Clone the repository and navigate to the backend directory:

   git clone https://github.com/DanielFabiani/countries-app.git
   cd countries-app/backend
   
3. Install the dependencies:

   ```npm install```

3. Start the NestJS development server:
   
  ```npm run start:dev```

The backend will run on http://localhost:4000.

### Frontend (Next.js)
Navigate to the frontend directory:

```cd ../frontend```

Install the dependencies:


```npm install```


Start the Next.js development server:

```npm run dev```

The frontend will run on http://localhost:3000.

### Running the Application

To run both the frontend and backend together, follow these steps:

Open two terminal windows/tabs.

In the first terminal, start the backend:

```cd backend```

```npm run start:dev```

In the second terminal, start the frontend:

```cd frontend```
```npm run dev```

You can now access the application in your browser at http://localhost:3000.

### API Routes

Get all available countries:

GET http://localhost:4000/api/countries/AvailableCountries

Get specific country data (example for Ukraine):

GET http://localhost:4000/api/countries/CountryInfo/UA

Get the population of a country (example for Argentina):

GET http://localhost:4000/api/countries/population

Get flags for all countries:

GET http://localhost:4000/api/countries/countriesFlags


## Project Structure

```
countries-app/
├── backend/                # NestJS backend
│   ├── src/
│   ├── test/
│   └── ...
├── frontend/               # Next.js frontend
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── ...
├── README.md               # This file
└── ...
```


