import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Waitlist entries
export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWaitlistSchema = createInsertSchema(waitlistEntries).omit({
  id: true,
  createdAt: true
});

export type InsertWaitlistEntry = z.infer<typeof insertWaitlistSchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;

// A/B Testing
export const abTests = pgTable("ab_tests", {
  id: serial("id").primaryKey(),
  testId: text("test_id").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const abTestVariations = pgTable("ab_test_variations", {
  id: serial("id").primaryKey(),
  testId: text("test_id").notNull().references(() => abTests.testId, { onDelete: 'cascade' }),
  userId: text("user_id").notNull(),
  variation: text("variation").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const abTestConversions = pgTable("ab_test_conversions", {
  id: serial("id").primaryKey(),
  testId: text("test_id").notNull().references(() => abTests.testId, { onDelete: 'cascade' }),
  userId: text("user_id").notNull(),
  variation: text("variation").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertABTestSchema = createInsertSchema(abTests).omit({
  id: true,
  createdAt: true
});

export const insertABTestVariationSchema = createInsertSchema(abTestVariations).omit({
  id: true,
  createdAt: true
});

export const insertABTestConversionSchema = createInsertSchema(abTestConversions).omit({
  id: true,
  createdAt: true
});

export type InsertABTest = z.infer<typeof insertABTestSchema>;
export type InsertABTestVariation = z.infer<typeof insertABTestVariationSchema>;
export type InsertABTestConversion = z.infer<typeof insertABTestConversionSchema>;

export type ABTest = typeof abTests.$inferSelect;
export type ABTestVariation = typeof abTestVariations.$inferSelect;
export type ABTestConversion = typeof abTestConversions.$inferSelect;
