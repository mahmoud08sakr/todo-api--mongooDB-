# Todo API with MongoDB, JWT, and Bcrypt

![Todo API](todo-api.png)

This is a simple Todo API that uses MongoDB as the database, JWT for authentication, and Bcrypt for password hashing. The API allows users to manage their todos securely by protecting data with JWT and Bcrypt, and sensitive configurations are stored in a `.env` file.

## Getting Started

To get started with this Todo API, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/yourusername/todo-api.git

Install the required dependencies by running npm install.

cd todo-api
npm install

Create a .env file in the root directory of the project and set the necessary environment variables. Make sure to include the MongoDB connection string and a secret key for JWT token generation. For example:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todo_app
JWT_SECRET=mysecretkey


Start the server by running npm start.
npm start


API Endpoints
The following endpoints are available in this Todo API:

User Authentication
POST /api/auth/register: Register a new user. Requires username and password in the request body.

POST /api/auth/login: Login with an existing user. Requires username and password in the request body. Returns a JWT token upon successful login.

Todo Management
The following endpoints are available in this Todo API:

Task Management
All task-related endpoints require a valid JWT token in the Authorization header in the format: Bearer <token>

GET /task: Retrieve all tasks for the authenticated user.

POST /task: Create a new task. Requires `title` and `description` in the request body.

GET /task/:id: Retrieve a specific task by its ID.

PUT /task/:id: Update a specific task by its ID. Requires `title` and `description` in the request body.

DELETE /task/:id: Delete a specific task by its ID.

User Management
All user-related endpoints:

POST /user/signUp: Register a new user. Requires `username`, `password`, and other user details in the request body.

POST /user/signin: Login with an existing user. Requires `username` and `password` in the request body. Returns a JWT token upon successful login.

POST /user/logout: Logout the current user. Requires a valid JWT token.

GET /user/:id: Retrieve user details by user ID.

PUT /user/:id: Update user details by user ID. Requires valid JWT token and `username`, `password`, and other user details in the request body.

DELETE /user/:id: Delete a specific user by user ID.

DELETE /user/softDelete: Soft delete a specific user by user ID. (Mark the user as inactive without permanently removing data).

---
Feel free to add more details or modify the endpoints according to your specific use case. Make sure to implement the corresponding API routes and logic in your application for each of the endpoints mentioned above. Happy coding!


Security
This Todo API uses JWT for user authentication to protect access to todo data. The passwords are securely hashed using Bcrypt before storing them in the database.

Please ensure to keep the .env file containing sensitive information like the JWT_SECRET and MongoDB credentials secure. Never share it publicly or commit it to version control.

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Tokens)
Bcrypt
Contributing
Contributions are welcome! If you find any issues or want to enhance the API, feel free to create a pull request. Please make sure to follow the code style and include appropriate test cases.


