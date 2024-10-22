# 🌐 Frontend and Backend Connection with Axios

This project demonstrates how to connect a frontend application with a backend API using Axios.

## 📁 Project Structure

* `backend/`: Backend API code
* `frontend/`: Frontend application code
* `README.md`: This file

## 🚀 Getting Started

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `npm install` (in both `backend/` and `frontend/` directories)
3. Start the backend server: `node server.js` (in the `backend/` directory)
4. Open the frontend application: `open index.html` (in the `frontend/` directory)

## API Endpoints

* `GET /api/data`: Returns a JSON object with a message from the backend API

## 📦About Axios

Axios is a promise-based HTTP client for JavaScript that can be used in both the browser and Node.js. It provides an easy-to-use API for making HTTP requests and handling responses. Some key features of Axios include:

- **Promise-based**: Axios returns promises, making it easy to handle asynchronous operations.
- **Interceptors**: Axios allows you to intercept requests or responses before they are handled, enabling functionality like authentication or logging.
- **Automatic JSON transformation**: Axios automatically transforms JSON data, making it easier to work with APIs.

## 🔐CORS (Cross-Origin Resource Sharing)

CORS is a security feature implemented by web browsers to prevent malicious websites from making requests to other domains. When your frontend application (running on a different port or domain) tries to access the backend API, the browser checks if the server allows this request.

To enable CORS in our backend server, you can use the `cors` middleware. First, install the `cors` package in the `backend` directory:

```bash
npm install cors
```
## ⚡Proxy Configuration in a Vite App
Vite is a modern build tool that provides a fast development experience. To set up a proxy in a Vite application, you can use the server.proxy option in the Vite configuration file (vite.config.js). This allows you to redirect API requests to a different server (like your backend API) during development. 

### 📋 Steps to Set Up a Proxy
- **Create or Update vite.config.js**: If you don’t have a vite.config.js file, create one in the root of your Vite project. If you already have it, open it for editing.

- **Configure the Proxy**: Add the server.proxy configuration within the exported object. Here’s an example configuration:

- **See my vite.config.js**:
```bash 
server: {
    proxy: {
      '/api' : 'http://localhost:3000',
    }
  },
```
- **Making API Requests**: With this configuration, you can make API requests in your frontend code without specifying the full URL. For example, in your frontend JavaScript (e.g., app.tsx), you can do:
```bash
axios.get('/api/jokes')
  .then(response => {
    setjokes(response.data)
  })
  .catch(error => {
    console.error(error)
  })
```
- **Run Your Vite App**: Start your Vite development server using:
```bash
npm run dev
```

## ✅ Benefits of Using a Proxy
- Avoid CORS Issues: By using a proxy, you can bypass CORS restrictions that browsers enforce when making cross-origin requests.
- Simplified API Calls: You can use relative paths in your API calls, making your code cleaner and more manageable.
- Development Convenience: It simplifies the development setup, allowing you to focus on building your application without worrying about backend configurations.
