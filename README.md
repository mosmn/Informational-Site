# Simple Node.js Server

This project is a simple Node.js server that serves different HTML pages based on the URL path.

## Project Structure

- `index.html` - Main page.
- `about.html` - About page.
- `contact-me.html` - Contact page.
- `404.html` - Error page for unknown routes.
- `index.js` - Node.js server code.

## Usage

- Access the main page at [http://localhost:8080](http://localhost:8080) to view `index.html`.
- Access the about page at [http://localhost:8080/about](http://localhost:8080/about) to view `about.html`.
- Access the contact page at [http://localhost:8080/contact-me](http://localhost:8080/contact-me) to view `contact-me.html`.
- Any other URL will result in the `404.html` page being displayed.

## Getting Started

1. Clone this repository or create a similar directory structure on your local machine.

2. Create the HTML files for your project:

   - `index.html` for the main page.
   - `about.html` for the about page.
   - `contact-me.html` for the contact page.
   - `404.html` for error handling.

3. Create the `index.js` file with the server code.

4. Start the Node.js server:

   ```shell
   node index.js
    ```

5. Access the main page at [http://localhost:8080](http://localhost:8080) to view `index.html`.
