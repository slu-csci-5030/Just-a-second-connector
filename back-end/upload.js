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
fileFilter: (req, file, cb) => {

		// Check file types allowed for upload

		if (file.mimetype === "application/pdf" || file.mimetype === "video/mp4") {

			cb(null, true); // Accept the file

		} else {

			cb(new Error("Invalid file format")); // Reject the file

		}

	},

}).fields([

	{ name: "jobDescriptionFile", maxCount: 1 },

	{ name: "videoFile", maxCount: 1 },

]);
 
export default upload;