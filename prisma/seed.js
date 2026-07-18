/* eslint-disable */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@nagaara.com";
  const adminPassword = "Nagaara@2024";

  const existing = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existing) {
    const hashed = await bcrypt.hash(adminPassword, 12);
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashed,
        name: "Nagaara Admin",
        role: "admin",
      },
    });
    console.log("Admin account created:");
    console.log("  Email: admin@nagaara.com");
    console.log("  Password: Nagaara@2024");
  } else {
    console.log("Admin account already exists.");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
