import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON
  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, clinicName, email, phone, message } = req.body;
    
    try {
      // Save to Firestore
      const docRef = await addDoc(collection(db, "consultation_requests"), {
        name,
        clinicName,
        email,
        phone,
        message,
        createdAt: serverTimestamp()
      });

      console.log("------------------------------------------");
      console.log("NEW CONSULTATION REQUEST SAVED TO FIRESTORE:");
      console.log(`Document ID: ${docRef.id}`);
      console.log(`Name: ${name}`);
      console.log(`Clinic: ${clinicName}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Message: ${message}`);
      console.log("------------------------------------------");

      res.status(200).json({ 
        success: true, 
        message: "Consultation request received successfully. Our team will contact you soon." 
      });
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to save request. Please try again later." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Form submissions will be logged here.");
  });
}

startServer();
