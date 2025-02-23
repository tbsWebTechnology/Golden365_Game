import "dotenv/config";
import express from "express";
import configViewEngine from "./config/configEngine.js";
import routes from "./routes/web.js";
import cronJobController from "./controllers/cronJobController.js";
import socketIoController from "./controllers/socketIoController.js";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
import mysql from 'mysql2';
import fs from 'fs';
import path from 'path';
import multer from 'multer';  // <-- Import multer for handling file uploads
import { fileURLToPath } from 'url'; // For __dirname in ES modules
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// setup viewEngine
configViewEngine(app);
// init Web Routes
routes.initWebRouter(app);

// Cron job for game 1 minute
cronJobController.cronJobGame1p(io);

// Check who connects to the server
socketIoController.sendMessageAdmin(io);

// Create database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'diuwin',
});

// Fetch app details from the database
app.get('/get-app-details', (req, res) => {
  db.query('SELECT app_name, app_about, app_notification, notice1, notice2, notice3, BONUS_MONEY_ON_REGISTER, MINIMUM_MONEY_USDT, MINIMUM_MONEY_INR, MINIMUM_WITHDRAWAL_MONEY_USDT, MINIMUM_WITHDRAWAL_MONEY_INR, USDT_INR_EXCHANGE_RATE, INVITER_BONUS_MONEY_ON_REGISTER, usr_rech_bonus, inv_rech_bonus FROM admin_ac LIMIT 1', (err, result) => {
    if (err) {
      console.error('Error fetching app details:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(result[0]);
  });
});

// Helper function to update the .env file and reload it
function updateEnv(updatedEnv) {
  const envPath = path.resolve(process.cwd(), '.env');
  let envContent = '';

  // Convert the updatedEnv object into a .env format
  for (let key in updatedEnv) {
    envContent += `${key}=${updatedEnv[key]}\n`;
  }

  // Write updated environment variables to the .env file
  try {
    fs.writeFileSync(envPath, envContent);
    
    // Re-load the updated environment variables
    dotenv.config({ path: envPath });

    console.log('Environment variables updated and reloaded successfully.');
  } catch (err) {
    console.error('Failed to update .env file:', err);
    throw err;
  }
}

// Route to handle updating .env data
app.post('/settings/env', (req, res) => {
  const updatedEnv = req.body;

  try {
    updateEnv(updatedEnv);
    res.status(200).send('Environment variables updated successfully!');
  } catch (err) {
    res.status(500).send('Failed to update environment variables.');
  }
});

// File upload setup using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'src/public/uploads/activities/';
    // Create the directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);  // Use the original file name and replace if it already exists
  }
});

const upload = multer({ storage: storage });

// Route to handle image upload
app.post('/upload-image', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Log the file path for debugging purposes
    console.log(`File saved at: src/public/uploads/activities/${req.file.filename}`);
    
    res.status(200).json({ message: `File uploaded successfully as ${req.file.filename}` });
  } catch (err) {
    console.error('Failed to upload file:', err);
    res.status(500).json({ error: 'Failed to upload file.' });
  }
});

// Route to fetch current .env data by directly reading the file
app.get('/settings/env', (req, res) => {
  const envPath = path.resolve(process.cwd(), '.env');

  try {
    const envData = fs.readFileSync(envPath, 'utf-8');
    const envObject = {};
    
    // Split file by lines and parse key-value pairs
    envData.split('\n').forEach(line => {
      const [key, value] = line.split('=');
      if (key) {
        envObject[key] = value;
      }
    });

    res.json(envObject);
  } catch (err) {
    console.error('Error reading .env file:', err);
    res.status(500).send('Failed to read environment variables.');
  }
});


app.post("/api/upgrade-vip-level", async (req, res) => {
  try {
    await releaseVIPLevel();
    res.status(200).json({ message: "VIP levels upgraded successfully!" });
  } catch (error) {
    console.error("Error upgrading VIP levels:", error);
    res.status(500).json({ message: "Failed to upgrade VIP levels." });
  }
});




// Fetch red envelope history based on phone number
app.post('/api/webapi/use/redenvelope/history', (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.json({ success: false, message: 'Phone number is required' });
  }

  const query = 'SELECT * FROM redenvelopes WHERE phone = ?';
  db.query(query, [phone], (err, results) => {
    if (err) {
      console.error('Error fetching red envelope history:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }

    if (results.length > 0) {
      return res.json({ success: true, data: results });
    } else {
      return res.json({ success: false, message: 'No history available' });
    }
  });
});


// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
