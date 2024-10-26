import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/shared/infrastructure/database/schemas',
  out: './drizzle',
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
});
