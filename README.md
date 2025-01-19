Book Review Application

This is a full-stack Book Review application where users can add, view, update, and delete book reviews. The app uses a React front-end and an Express.js back-end, with MongoDB for storing book information.

Features Implemented

- Add a Book: Users can add a book to the collection, including the title, author, and review.
- Edit Book Details: Users can edit details of a book such as title, author, and rating.
- Delete a Book: Users can remove a book from the list.
- Search Books: Users can search for books by title or author.
- Sort Books: Users can sort the book list by rating (ascending or descending).


Setup Instructions

1. Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/UshaniSanjana/Book-Review.git

2. Install Dependencies

Navigate to the root of the repository, then install dependencies for both the backend and frontend.

Backend Setup

1. Navigate to the `backend` directory:
   
   cd backend
   
2. Install backend dependencies:

   npm install

Frontend Setup

1. Navigate to the `frontend` directory:

   cd frontend

2. Install frontend dependencies:

   npm install

3. Configure Environment Variables

In the backend folder, create a `.env` file and add MongoDB connection string:

PORT=3500


4. Start the Development Server

Backend

Navigate to the `backend` directory and start the server using `nodemon`:

npm run dev

This will start the backend server on `http://localhost:3500`.

Frontend

Navigate to the `frontend` directory and start the React development server:

npm start

This will start the frontend on `http://localhost:3000`.

5. Access the Application

Once both servers are running, visit `http://localhost:3000` in your browser to use the application.

Additional Notes

- Proxy Configuration: The React frontend is set up to proxy API requests to the backend server at `http://localhost:3500` using the `"proxy"` field in `frontend/package.json`.
  
- MongoDB Setup: Make sure MongoDB is installed and running on your local machine, or use a cloud-based MongoDB service like MongoDB Atlas.
  
Technologies Used

- Frontend: React
- Backend: Node.js, Express.js, CORS
- Database: MongoDB, Mongoose
- Other: Axios for HTTP requests, dotenv for environment variable management, nodemon for development server

