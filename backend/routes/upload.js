import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "public/");
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
	const content = JSON.parse(req.body.content);
	const imageName = req.file.filename;
	res.status(200).json({ success: true, data: req.file.filename });
});

export default router;
