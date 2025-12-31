import type { Express } from "express";
import { createServer, type Server } from "http";
import { resend } from "./resend";
import { db } from "server/db";
import { inquiries } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { recaptchaToken } = req.body;

      if (!recaptchaToken) {
        return res.status(400).json({ message: "reCAPTCHA token missing" });
      }
      // verifying
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const verifyRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${secretKey}&response=${recaptchaToken}`,
        }
      );

      const verifyData = await verifyRes.json();
      if (!verifyData.success || (verifyData.score && verifyData.score < 0.5)) {
        return res
          .status(400)
          .json({ message: "reCAPTCHA verification failed" });
      }
      const {
        fullName,
        email,
        phone,
        eventDate,
        eventLocation,
        guestCount,
        eventType,
        services,
        additionalDetails,
      } = req.body;
      try {
        await db.insert(inquiries).values({
          fullName,
          email,
          phone,
          eventType,
          eventDate,
          eventLocation,
          guestCount,
          services: services.join(", "),
          additionalDetails,
        });
      } catch (dbError) {
        console.error("DB Error:", dbError);
      }

      const { error } = await resend.emails.send({
        from: "Masala Essence <onboarding@resend.dev>",
        to: ["amairaagg2004@gmail.com"], // YOU receive the inquiry
        subject: `New Inquiry`,
        html: `
          <h2>New Event Inquiry</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr />
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Event Date:</strong> ${eventDate}</p>
          <p><strong>Location:</strong> ${eventLocation}</p>
          <p><strong>Guest Count:</strong> ${guestCount}</p>
          <p><strong>Services Interested:</strong></p>
          <ul>
            ${services?.map((s: string) => `<li>${s}</li>`).join("")}
          </ul>
          <p><strong>Additional Details:</strong></p>
          <p>${additionalDetails}</p>
        `,
      });

      if (error)
        return res.status(400).json({ message: "Email failed to send" });

      res.json({ success: true });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ message: "Something went wrong" });
    }
  });

  return httpServer;
}
