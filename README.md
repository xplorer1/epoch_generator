# Epoch Generator

## Description
The **Epoch Generator** is a Node.js-based application that periodically generates epoch timestamps and stores them in a MongoDB database. This data can then be consumed by other services.

---

## Features
- Generates epoch timestamps every 5 seconds.
- Saves timestamps in a MongoDB database.
- Includes unit tests using Jest.

---

## Prerequisites
Before running the application, ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** (v7 or later)
- **MongoDB** (local or cloud instance)

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/xplorer1/epoch_generator.git
   cd epoch_generator

2. Install modules:
    ```bash
    npm install
   
3. Rename .env.sample to .env and put in your mongo db server url.

4. Run tests:
    ```bash
   npm run test

5. Start the service:
    ```bash
   npm start
