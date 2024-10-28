import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const cars = pgTable('cars', {
  id: uuid('id').defaultRandom().primaryKey(),
  model: varchar('model').notNull(),
  ridesCount: integer('rides_count').notNull().default(0),
});

export type TCarModel = typeof cars.$inferSelect;
