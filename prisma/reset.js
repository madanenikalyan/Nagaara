const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

async function main() {
  await prisma.user.deleteMany();
  console.log("Deleted all users");

  const hashed = await bcrypt.hash("Nagaara@2024", 12);
  const user = await prisma.user.create({
    data: {
      email: "admin@nagaara.com",
      password: hashed,
      name: "Nagaara Admin",
      role: "admin",
    },
  });
  console.log("Admin created:", user.email);
  console.log("Hash:", user.password);

  const valid = await bcrypt.compare("Nagaara@2024", user.password);
  console.log("Password match:", valid);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => { console.error(e); prisma.$disconnect(); });
