# NOTE T3 APP

![logo](https://i.ibb.co/nc3KLpx/teste.png")

## 👨‍🚀 Introduction


This project uses the following technologies:

- [**create-t3-app**](https://create.t3.gg) - The best way to start a full-stack, typesafe Next.js app.
- [**Prisma**](https://prisma.io) - A next-generation Node.js and TypeScript ORM.
- [**tRPC**](https://trpc.io/) - Move Fast and Break Nothing. End-to-end typesafe APIs made easy.
- [**TailwindCSS**](https://tailwindcss.com) - Design System.
- [**ReactHotToast**](https://www.npmjs.com/package/react-hot-toast) - Smoking hot Notifications for React.
- [**SQLite**](https://www.sqlite.org/) - Database.

## 🚀 Getting Started

**Requirements:**

- [x] [Node.js](https://nodejs.org) (+v18.x) installed.
- [x] [Visual Studio Code](https://code.visualstudio.com) with the recommended extensions installed (ESLint, Prettier, Tailwind CSS IntelliSense, Prisma).
- [x] [SQLite](https://www.sqlite.org/) (+V3.45.3) installed.

**Steps:**

1. Fork this project:

- [Click here](https://github.com/Hugocorreaa/note-t3-app/fork/).

2. Clone the repository:

```bash
git clone git@github.com:YOU_USER/note-t3-app.git
```

3. Install dependencies:

```bash
# install dependencies:
npm install
```
4. Create a **.env** file with the following content:

```bash
# Database:
DATABASE_URL="file:./db.sqlite"
```
4. Initialize prisma database:

```bash
npm run db:push
```

5. Run aplication
```bash
npm run dev
```
