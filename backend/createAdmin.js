const bcrypt = require("bcryptjs");
const prisma = require("./src/lib/prisma");

async function main() {
  const passwordHash = await bcrypt.hash("admin123", 10);

  const user = await prisma.user.upsert({
    where: {
      username: "admin",
    },
    update: {
      password: passwordHash,
      role: "ADMIN",
    },
    create: {
      username: "admin",
      password: passwordHash,
      role: "ADMIN",
    },
  });

  console.log("Admin user ready:");
  console.log({
    id: user.id,
    username: user.username,
    role: user.role,
  });
}

main()
  .catch((error) => {
    console.error("Failed to create admin user:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });