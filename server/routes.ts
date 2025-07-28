import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    try {
      const { firstName, lastName, email, projectType, budget, details } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email) {
        return res.status(400).json({ 
          error: "Missing required fields: firstName, lastName, and email are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Invalid email format" 
        });
      }

      // Log the contact form submission (in a real app, you'd save to database or send email)
      console.log("New contact form submission:", {
        firstName,
        lastName,
        email,
        projectType,
        budget,
        details,
        timestamp: new Date().toISOString()
      });

      // In a real application, you would:
      // 1. Save to database: await storage.insertContactSubmission(contactData)
      // 2. Send email notification to admin
      // 3. Send confirmation email to user
      // 4. Integrate with CRM system

      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ 
          error: "Email is required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Invalid email format" 
        });
      }

      // Log newsletter subscription
      console.log("New newsletter subscription:", {
        email,
        timestamp: new Date().toISOString()
      });

      res.status(200).json({ 
        success: true, 
        message: "Newsletter subscription successful" 
      });
    } catch (error) {
      console.error("Error processing newsletter subscription:", error);
      res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
