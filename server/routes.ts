import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertABTestSchema, insertABTestVariationSchema, insertABTestConversionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Store waitlist entry
      const waitlistEntry = await storage.createWaitlistEntry(validatedData);
      
      res.status(201).json({ 
        message: "Successfully added to waitlist", 
        entry: waitlistEntry 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Error adding to waitlist:", error);
        res.status(500).json({ 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  app.get("/api/waitlist", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.status(200).json(entries);
    } catch (error) {
      console.error("Error getting waitlist entries:", error);
      res.status(500).json({ 
        message: "An error occurred while fetching waitlist entries" 
      });
    }
  });

  // A/B Testing routes
  app.get("/api/ab-tests", async (_req: Request, res: Response) => {
    try {
      const tests = await storage.getABTests();
      res.status(200).json(tests);
    } catch (error) {
      console.error("Error getting A/B tests:", error);
      res.status(500).json({
        message: "An error occurred while fetching A/B tests"
      });
    }
  });

  app.post("/api/ab-tests", async (req: Request, res: Response) => {
    try {
      // Handle array of tests
      if (Array.isArray(req.body)) {
        const tests = [];
        for (const testData of req.body) {
          const validatedData = insertABTestSchema.parse(testData);
          const test = await storage.createABTest(validatedData);
          tests.push(test);
        }
        res.status(201).json(tests);
        return;
      }

      // Handle single test
      const validatedData = insertABTestSchema.parse(req.body);
      const test = await storage.createABTest(validatedData);
      res.status(201).json(test);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error creating A/B test:", error);
        res.status(500).json({
          message: "An error occurred while creating A/B test"
        });
      }
    }
  });

  app.post("/api/ab-tests/variation", async (req: Request, res: Response) => {
    try {
      const validatedData = insertABTestVariationSchema.parse(req.body);
      const variation = await storage.createABTestVariation(validatedData);
      res.status(201).json(variation);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error creating A/B test variation:", error);
        res.status(500).json({
          message: "An error occurred while creating A/B test variation"
        });
      }
    }
  });

  app.post("/api/ab-tests/conversion", async (req: Request, res: Response) => {
    try {
      const validatedData = insertABTestConversionSchema.parse(req.body);
      const conversion = await storage.createABTestConversion(validatedData);
      res.status(201).json(conversion);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error creating A/B test conversion:", error);
        res.status(500).json({
          message: "An error occurred while creating A/B test conversion"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
