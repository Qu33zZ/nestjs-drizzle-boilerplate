# NestJS + PostgreSQL + Drizzle Boilerplate

### Description

This is an App built with:

- NestJS
- PostgreSQL
- Drizzle

This app has following components:

- API

It was built using `Onion Architecture` to have loose connections between the application layers and modules for better code scalability and maintenance

## Each component has it's own start command and starts as a separate NodeJS process

---

### Build

App uses `yarn` as package manager

```sh
yarn run build
```

---

### Start

#### Api

```sh
yarn run start:api
```

---

### .env Example

```ini
PORT=5001
ENVIRONMENT=DEVELOPMENT or PRODUCTION or STAGING
POSTGRES_URL=
```

### Environment Variables

| Environment Variable | Type   | Is Required | Default Value                       | Description                      |
| -------------------- | ------ | ----------- | ----------------------------------- | -------------------------------- |
| PORT                 | number | No          | 5001                                | Port for the application server  |
| ENVIRONMENT          | enum   | Yes         | DEVELOPMENT, PRODUCTION, or STAGING | Application environment          |
| POSTGRES_URL         | string | Yes         | -                                   | Full URL for PostgreSQL database |
