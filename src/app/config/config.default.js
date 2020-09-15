export default configCors = {
    origin: ["http://localhost:4200"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Methods",
      "Access-Control-Request-Headers"
    ],
    credentials: true,
    enablePreflight: true
  };