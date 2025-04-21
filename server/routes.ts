import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
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

  const httpServer = createServer(app);

  return httpServer;
}
