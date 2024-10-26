CREATE TABLE IF NOT EXISTS "cars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"model" varchar NOT NULL,
	"rides_count" integer DEFAULT 0
);
