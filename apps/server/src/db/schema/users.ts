import { pgTable, varchar, serial, timestamp, unique } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	email: varchar({ length: 255 }).notNull(),
	password: varchar({ length: 255 }).notNull(),
	role: varchar({ length: 50 }).default('guest').notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	fullName: varchar("full_name", { length: 255 }).notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);