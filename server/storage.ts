import { 
  users, type User, type InsertUser, 
  waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry,
  abTests, type ABTest, type InsertABTest, 
  abTestVariations, type ABTestVariation, type InsertABTestVariation,
  abTestConversions, type ABTestConversion, type InsertABTestConversion
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist storage methods
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  
  // A/B Test methods
  getABTests(): Promise<ABTest[]>;
  getABTest(testId: string): Promise<ABTest | undefined>;
  createABTest(test: InsertABTest): Promise<ABTest>;
  createABTestVariation(variation: InsertABTestVariation): Promise<ABTestVariation>;
  getABTestVariation(testId: string, userId: string): Promise<ABTestVariation | undefined>;
  createABTestConversion(conversion: InsertABTestConversion): Promise<ABTestConversion>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result.length ? result[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result.length ? result[0] : undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const result = await db.insert(waitlistEntries).values(entry).returning();
    return result[0];
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return await db.select().from(waitlistEntries);
  }

  // A/B Test methods implementation
  async getABTests(): Promise<ABTest[]> {
    return await db.select().from(abTests);
  }

  async getABTest(testId: string): Promise<ABTest | undefined> {
    const result = await db.select().from(abTests).where(eq(abTests.id, testId));
    return result.length ? result[0] : undefined;
  }

  async createABTest(test: InsertABTest): Promise<ABTest> {
    const result = await db.insert(abTests).values(test).returning();
    return result[0];
  }

  async createABTestVariation(variation: InsertABTestVariation): Promise<ABTestVariation> {
    const result = await db.insert(abTestVariations).values(variation).returning();
    return result[0];
  }

  async getABTestVariation(testId: string, userId: string): Promise<ABTestVariation | undefined> {
    const result = await db.select()
      .from(abTestVariations)
      .where(
        and(
          eq(abTestVariations.testId, testId),
          eq(abTestVariations.userId, userId)
        )
      );
    return result.length ? result[0] : undefined;
  }

  async createABTestConversion(conversion: InsertABTestConversion): Promise<ABTestConversion> {
    const result = await db.insert(abTestConversions).values(conversion).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
