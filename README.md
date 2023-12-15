# StageConnect: Internship Website

Welcome to StageConnect, your go-to platform for internship opportunities! This project is built using Next.js for the frontend, MongoDB for the database, and Spring Boot for the backend.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)

## Introduction

StageConnect is an internship website that aims to connect students with exciting internship opportunities. It provides a user-friendly interface for both students and companies to manage and discover internships. The project is divided into three main components: the frontend (built with Next.js), the backend (powered by Spring Boot), and the database (MongoDB).

## Features

- **User Authentication**: Secure user accounts with authentication features.
- **Internship Listings**: Browse and search for available internships.
- **Application System**: Apply for internships directly through the platform.
- **Company Profiles**: Companies can create profiles and post internship opportunities.
- **Dashboard**: Personalized dashboard for users and companies to manage their profiles and applications.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js and npm
- MongoDB
- Java Development Kit (JDK)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/stageconnect.git
Install dependencies for frontend:


Copy code
   ```bash
cd stageconnect/frontend
npm install
Install dependencies for backend:
```

Copy code
   ```bash
cd ../backend
./mvnw clean install
```
(Note: This command is for Unix-like systems. For Windows, you might use mvnw.cmd.)

## Usage

Start the frontend:

Copy code
   ```bash
cd ../frontend
npm run dev
```
The Next.js development server will start.

Start the backend:

Copy code
   ```bash
cd ../backend
./mvnw spring-boot:run
```
The Spring Boot application will start.

Visit http://localhost:3000 in your browser to access the StageConnect website.

## Acknowledgments
Special thanks to the Next.js, MongoDB, and Spring Boot communities for their fantastic tools and resources. We appreciate the contributions of all our contributors.
npm install
