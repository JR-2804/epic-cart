import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createAccounts = async () => {
  await prisma.account.upsert({
    where: { name: "Alice" },
    update: {},
    create: {
      name: "Alice",
      phone: "314-298-9731",
      address: {
        create: {
          street: "4748 Bruce Street",
          city: "Saint Louis",
          state: "Missouri",
          zip: "63108",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Bob" },
    update: {},
    create: {
      name: "Bob",
      phone: "972-809-6438",
      address: {
        create: {
          street: "2993 Ash Street",
          city: "Dallas",
          state: "Texas",
          zip: "75244",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Sally" },
    update: {},
    create: {
      name: "Sally",
      phone: "303-869-2834",
      address: {
        create: {
          street: "4627 Roy Alley",
          city: "Denver",
          state: "Colorado",
          zip: "80218",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "John" },
    update: {},
    create: {
      name: "John",
      phone: "720-221-2877",
      address: {
        create: {
          street: "4680 Snider Street",
          city: "Englewood",
          state: "Colorado",
          zip: "80112",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Elena" },
    update: {},
    create: {
      name: "Elena",
      phone: "402-356-2855",
      address: {
        create: {
          street: "219 Poling Farm Road",
          city: "Carleton",
          state: "Nebraska",
          zip: "68370",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Fernando" },
    update: {},
    create: {
      name: "Fernando",
      phone: "218-384-7903",
      address: {
        create: {
          street: "758 Ferrell Street",
          city: "Carlton",
          state: "Minnesota",
          zip: "55718",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Chelsea" },
    update: {},
    create: {
      name: "Chelsea",
      phone: "952-466-0321",
      address: {
        create: {
          street: "3401 Oral Lake Road",
          city: "Cologne",
          state: "Minnesota",
          zip: "55322",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Juan" },
    update: {},
    create: {
      name: "Juan",
      phone: "202-647-9193",
      address: {
        create: {
          street: "4271 Goldcliff Circle",
          city: "Washington",
          state: "Washington DC",
          zip: "20036",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Diana" },
    update: {},
    create: {
      name: "Diana",
      phone: "972-942-8877",
      address: {
        create: {
          street: "3478 Stoney Lane",
          city: "Dallas",
          state: "Texas",
          zip: "75202",
        },
      },
    },
  });
  await prisma.account.upsert({
    where: { name: "Javier" },
    update: {},
    create: {
      name: "Javier",
      phone: "979-256-2412",
      address: {
        create: {
          street: "891 Fannie Street",
          city: "Houston",
          state: "Texas",
          zip: "77060",
        },
      },
    },
  });
};

const createProducts = async () => {
  await prisma.product.upsert({
    where: { id: "clcymnlb8000008mgg4nb055r" },
    update: {},
    create: {
      id: "clcymnlb8000008mgg4nb055r",
      name: "Pen",
      price: 10,
    },
  });
  await prisma.product.upsert({
    where: { id: "clcympkzp000108mgglf80gox" },
    update: {},
    create: {
      id: "clcympkzp000108mgglf80gox",
      name: "Spinner",
      price: 5,
    },
  });
  await prisma.product.upsert({
    where: { id: "clcymq6hw000208mgc2x89z60" },
    update: {},
    create: {
      id: "clcymq6hw000208mgc2x89z60",
      name: "Body Spray",
      price: 25,
    },
  });
  await prisma.product.upsert({
    where: { id: "clcymqyqe000308mg9und1gdr" },
    update: {},
    create: {
      id: "clcymqyqe000308mg9und1gdr",
      name: "Monitor HP",
      price: 300,
    },
  });
  await prisma.product.upsert({
    where: { id: "clcymrbky000408mgb2a64k0e" },
    update: {},
    create: {
      id: "clcymrbky000408mgb2a64k0e",
      name: "Mechanical Keyboard",
      price: 100,
    },
  });
  await prisma.product.upsert({
    where: { id: "clcyms9ol000508mgao89hst8" },
    update: {},
    create: {
      id: "clcyms9ol000508mgao89hst8",
      name: "Samsung Phone",
      price: 200,
    },
  });
  await prisma.product.upsert({
    where: { id: "clcymt8dy000608mg5ele0uuc" },
    update: {},
    create: {
      id: "clcymt8dy000608mg5ele0uuc",
      name: "Sport Shoes",
      price: 30,
    },
  });
};

const main = async () => {
  await createAccounts();
  await createProducts();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
