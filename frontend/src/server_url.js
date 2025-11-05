// Use environment variable with fallback for development
let SERVER_URL = process.env.REACT_APP_SERVER_URL;

if (!SERVER_URL) {
  // Check if we're running on Replit
  if (window.location.hostname.includes('.replit.dev') || window.location.hostname.includes('.repl.co')) {
    // Use the current domain with https
    SERVER_URL = `https://${window.location.hostname}`;
  } else {
    // Local development fallback
    SERVER_URL = "http://localhost:3001";
  }
}

export default SERVER_URL;