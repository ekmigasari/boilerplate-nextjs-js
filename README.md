# Boilerplate NextJs (Javascript)

## Getting Started

1. Setup NextJs
2. Auth

## Setup NextJs

### initial setup

- TypeScript? No
- ESLint? No
- Tailwind CSS? Yes
- src/ directory? Yes
- Use App Router? Yes
- Default import alias (@/\*)? No

to use this boilerplate please install dependencies

```bash
npm i

```

### Cleanup

- page.js
- globals.css

## App Route

### Example

src/
|-- components/
| |-- Header.js
| |-- Footer.js
| |-- ...
|-- app/
| |-- index.js
| |-- about.js
| |-- contact.js
| |-- ...
|-- styles/
| |-- globals.css
| |-- Home.module.css
| |-- About.module.css
| |-- Contact.module.css
| |-- ...
|-- utils/
| |-- api.js
| |-- helper.js
| |-- external-library.js
| |-- utility-functions.js

public/
-- images/
| |-- logo.png
| |-- ...

**Explanation:**

- `components/`: This directory contains React components used across multiple pages or sections of your application.
- `pages/`: Next.js automatically maps files in this directory to routes. Each JavaScript or TypeScript file inside this directory becomes a route.
- `styles/`: Stylesheets for your components and pages. You can use global styles (globals.css) and module styles (Home.module.css, About.module.css, etc.)
- `utils/`: Utility functions or modules that can be shared across your application.
- `public/`: Static assets like images or other files that should be served as-is. Contents of this directory are accessible from the root of your application.

## Auth

We use auth.js https://authjs.dev/guides

bcrypt to protect password by converting into hashed format and storing in the database.




## Prisma

```bash
npx prisma init

```

DATABASE_URL=

Prisma to Supabase
https://www.prisma.io/docs/orm/overview/databases/supabase

everytime update scheme

```bash
Prisma migrate dev or prisma db push
```
