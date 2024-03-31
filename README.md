# Building a RESTful API with Express.js

In this guide, we'll walk through the process of building a RESTful API using Express.js. Express.js is a popular web framework for Node.js that simplifies the process of creating web applications and APIs.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Text editor or IDE of your choice

## Setup

1. **Initialize a Node.js project**: Create a new directory for your project and run `npm init` to initialize a new Node.js project.

2. **Install Express.js**: Install Express.js as a dependency by running `npm install express`.

3. **Create an entry point file**: Create a file (e.g., `index.js`) that will serve as the entry point for your application.

4. **Require Express.js**: In your `index.js` file, require Express.js and create an instance of the Express application:

    ```javascript
    const express = require('express');
    const app = express();
    ```

## Creating Routes

Express.js allows us to define routes to handle different HTTP requests. Here's how you can create routes:

1. **Define a route for handling GET requests**:

    ```javascript
    app.get('/api/resource', (req, res) => {
        // Logic to fetch and return resource data
        res.send('GET request received');
    });
    ```

2. **Define a route for handling POST requests**:

    ```javascript
    app.post('/api/resource', (req, res) => {
        // Logic to create a new resource
        res.send('POST request received');
    });
    ```

3. **Define a route for handling PUT requests**:

    ```javascript
    app.put('/api/resource/:id', (req, res) => {
        // Logic to update an existing resource
        res.send(`PUT request received for resource with ID ${req.params.id}`);
    });
    ```

4. **Define a route for handling DELETE requests**:

    ```javascript
    app.delete('/api/resource/:id', (req, res) => {
        // Logic to delete an existing resource
        res.send(`DELETE request received for resource with ID ${req.params.id}`);
    });
    ```

## Starting the Server

Finally, start the Express server by listening on a specific port:

```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

