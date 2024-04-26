import multer from "multer";
import path from "path";
import * as fs from "node:fs";
 
// Multer configuration for handling file uploads
const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			// Define the upload destination directory
			const __dirname = path.resolve();
			const uploadDir = path.join(__dirname, "uploads");
			// Create the directory if it doesn't exist
			if (!fs.existsSync(uploadDir)) {
				fs.mkdirSync(uploadDir);
			}
			cb(null, uploadDir);
		},
		filename: (req, file, cb) => {
			// Generate a unique filename to prevent overwriting
			const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
			const ext = path.extname(file.originalname);
			cb(null, uniqueSuffix + ext);
		},
	}),