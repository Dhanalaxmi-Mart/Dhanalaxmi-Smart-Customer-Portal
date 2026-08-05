require("dotenv").config();

const app = require("./app");
const prisma = require("./lib/prisma");

const PORT = Number(process.env.PORT) || 5000;

let server;

async function startServer() {
  try {
    await prisma.$connect();

    server = app.listen(PORT, "127.0.0.1", () => {
      console.log(
        `Server running at http://localhost:${PORT}`
      );
    });

    server.on("error", (error) => {
      console.error("HTTP server error:", error);
      process.exit(1);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

async function shutdown(signal) {
  console.log(`\n${signal} received. Shutting down...`);

  if (server) {
    server.close(async () => {
      await prisma.$disconnect();
      process.exit(0);
    });
  } else {
    await prisma.$disconnect();
    process.exit(0);
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

startServer();