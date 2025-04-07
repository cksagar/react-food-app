const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// ✅ Allow multiple origins (local + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://react-food-app-lime.vercel.app", // Vercel deployment
  "https://react-food-app-chetans-projects-012c5db0.vercel.app/",
];

server.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like curl or mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ API Route
server.use("/api", router);

// ✅ Server listen
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
