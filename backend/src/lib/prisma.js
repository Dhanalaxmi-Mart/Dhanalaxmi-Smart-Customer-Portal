require("dotenv").config();

const {
  PrismaClient,
} = require("../generated/prisma");

const {
  PrismaBetterSqlite3,
} = require("@prisma/adapter-better-sqlite3");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is missing from the .env file"
  );
}

const adapter = new PrismaBetterSqlite3({
  url: connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

module.exports = prisma;
