# User Registration Form

## Overview

The User Registration Form is a web application built with React.js for the frontend and Express.js with MongoDB for the backend. It allows users to register, view, and delete their accounts. The application includes a search feature to quickly find registered users by name or email.

## Features

- User registration with name, email, and password.
- View all registered users.
- Search for users by name or email.
- Delete registered users.
- Responsive design using Bootstrap.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React.js, Bootstrap
- **Backend:** Express.js
- **Database:** MongoDB
- **Others:** Axios for HTTP requests, Mongoose for MongoDB object modeling

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Prerequisites

- Node.js (v14 or higher)
- MongoDB account (for cloud hosting or local setup)
- Git (for cloning the repository)

### To Run the Project

1. First, clone the repository by using the command `git clone https://github.com/your-username/user-registration-form`.
   
2. Next, navigate to the project directory by running `cd user-registration-form`.

3. Install the dependencies for the backend by navigating to the backend folder and running `npm install`. After that, go back to the root directory and install the frontend dependencies by running `npm install`.

4. Create a `.env` file in the backend directory and include the following environment variables: `MONGODB_URI="your_mongodb_connection_string"` and `PORT=5000`.

5. To start the backend server, make sure you are in the backend directory and run the command `node server.js`.

6. Then, start the frontend development server by navigating back to the frontend directory and executing `npm start`.

7. Open your web browser and navigate to `http://localhost:3000` to view the application.

8. Finally, you can use a tool like MongoDB Compass to interact with your database.
