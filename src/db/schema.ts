import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users",{
    id: serial("id").primaryKey(),
    email: varchar("email").unique().notNull(),
    password: varchar("password").notNull(),
    name: varchar("name"),
})