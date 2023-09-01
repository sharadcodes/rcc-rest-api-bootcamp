# RCC (Restful CRUD API with Express)

## Installation

To get started you'll need to have Node.js and npm (Node Package Manager) installed on your system. If you haven't already, you can download and install them from [Node.js official website](https://nodejs.org/).

Once you have Node.js and npm installed, follow these steps to set up RCC:

1. Clone or download the RCC repository to your local machine.

2. Open your terminal and navigate to the project's root directory.

3. Run the following command to install the project's dependencies:

   ```bash
     npm install
   ```

## Usage

Here's how to use this Express.js API:

- **Root Route**: When you access the root route (http://localhost:3000/), it will respond with "Pranam! 🙏🏻".

- **Students Route**: You can access student-related routes by going to paths starting with "/students". Please make sure to define your specific student routes in a separate `student.js` file and import them into `app.js`.

- **Middleware**: This application uses two middleware components:

  - `express.json()`: Parses incoming JSON requests.
  - `morgan("dev")`: Logs HTTP requests to the console.

- **Starting the Server**: To start the server, run the following command:

  ```bash
  npm start
  ```
