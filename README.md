# Recipe Management Application

A Recipe Management application built with React, allowing users to add, view, edit, and delete recipes. Users can filter recipes by title or cuisine type and browse a categorized list of cuisines. This application is styled using Bootstrap and has smooth transitions for better user experience.

## Project Overview

The Recipe Management Application enables users to manage a collection of recipes with features like:

- **Add New Recipes**: Users can add recipes by filling out a form with details like title, ingredients, instructions, cuisine type, and cooking time.
- **Edit Existing Recipes**: Users can update the details of any recipe by navigating to the edit page.
- **View Recipes**: All added recipes are listed and can be filtered by title or cuisine type.
- **Delete Recipes**: Users can delete any recipe from the list.
- **Cuisine Categories**: Browse recipes by selecting a cuisine category (e.g., Italian, Asian, Mexican, etc.).
- **Search**: Users can search recipes based on title or cuisine type.
The application uses a JSON server as the backend to simulate an API for data storage and retrieval.

## Key Features
- **Recipe Management**: Add, edit, delete, and view recipes with ease.
- **Cuisine Filtering**: Filter recipes by cuisine categories like Italian, Asian, Mexican, etc.
- **Image Upload**: Users can upload an image for each recipe using the file input.
- **Real-time Search**: Search for recipes by title or cuisine type using a search bar.
- **Responsive Design**: Styled with Bootstrap to provide a mobile-friendly interface.

## Technologies Used
- **Frontend**: React, Bootstrap, CSS
- **Backend**: JSON Server (for simulating a REST API)
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: React Router
- **File Upload**: FileReader API for image preview and upload

## Installation and Setup

 ### Prerequisites

 1. Node.js and npm installed on your machine.
 2. JSON Server for simulating the API.

 ### Steps to Run the Project

- **1. Clone the repository** :
    ```bash
    git clone https://github.com/yourusername/recipe-management-app.git
    cd recipe-management-app
    ```

-  **2. Install dependencies** :
    ```bash
    npm install
    ```
- **3. Run JSON Server (Simulated API)** :
    ```bash
    npx json-server --watch db.json --port 5000
    ```

- **4. Start the React application** :
    ```bash
    npm start
    ```