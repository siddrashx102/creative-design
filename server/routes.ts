import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactNotification, sendContactConfirmation, sendNewsletterConfirmation } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
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

      const formData = {
        firstName,
        lastName,
        email,
        projectType,
        budget,
        details
      };

      // Log the contact form submission
      console.log("New contact form submission:", {
        ...formData,
        timestamp: new Date().toISOString()
      });

      // Send email notifications
      const [notificationSent, confirmationSent] = await Promise.all([
        sendContactNotification(formData),
        sendContactConfirmation(formData)
      ]);

      if (!notificationSent) {
        console.error("Failed to send admin notification email");
      }

      if (!confirmationSent) {
        console.error("Failed to send confirmation email to user");
      }

      // Return success even if emails fail (form submission still worked)
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
  app.post("/api/newsletter", async (req, res) => {
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

      // Send confirmation email
      const confirmationSent = await sendNewsletterConfirmation(email);
      
      if (!confirmationSent) {
        console.error("Failed to send newsletter confirmation email");
      }

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
