import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  integer,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  fullName: text("fullName").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),

  eventType: text("event_type").notNull(),
  eventDate: text("event_date").notNull(),
  eventLocation: text("event_location").notNull(),
  guestCount: integer("guest_count").notNull(),

  services: jsonb("services").notNull(),
  additionalDetails: text("message"),

  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(inquiries);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof inquiries.$inferSelect;
