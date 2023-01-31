<p align="center">
  <img src="https://flowbite.com/docs/images/logo.svg" width="130" alt="Logo" />
</p>

<h1 align="center">
  epic-cart
</h1>

<p align="center">
  Simple project to add products to accounts
</p>

## Table of contents
- <a href="#use-online">Use Online</a>
- <a href="#install-locally">Install Locally</a>
- <a href="#technologies">Technologies Used</a>

<h2 id="use-online">Use Online</h2>

The fastest way to use the app is to use from <a rel="noopener noreferrer" target="_blank" href="https://epic-cart.vercel.app/">here</a>.

<h2 id="install-locally">Install Locally</h2>

### Requirements

**Node.js:** Can be downloaded from <a href="https://nodejs.org/en/">here</a>.

**yarn:** Used as package manager. Can be installed using <code>npm install --global yarn</code>

### Installation

To get started just clone the repo.

Install all dependencies.

```bash
yarn install
```

Create a .env file with this content. Another database URL can be used but it's simpler to use this one.

```bash
DATABASE_URL='mysql://wkfkiw2bgt2d9uwpmmco:pscale_pw_UI73FL2jpcTDjtIIhXiOZ9UsoZlXxUT27YexfHNpIpo@us-east.connect.psdb.cloud/salesforce-interview?sslaccept=strict'
```

Run app

```bash
yarn dev
```

<h2 id="technologies">Technologies Used</h2>

**TypeScript:** Main programming language. required for typesafety.

**React:** Base framework.

**Next.js:** Meta framework.

**Prisma:** ORM.

**Tailwind CSS:** Used to style app.

**TRPC:** Used to create a typesafe API.

**Jotai:** Used to manage local state.

**PlanetScale:** Used to deploy database.

**Vercel:** Used to deploy app.
