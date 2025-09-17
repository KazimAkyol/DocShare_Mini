import { Router } from "express";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";
import { uploadDocument, shareDocument, listDocuments } from "../controllers/documentController";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", authMiddleware, upload.single("file"), uploadDocument);
router.post("/share", authMiddleware, shareDocument);
router.get("/", authMiddleware, listDocuments);

export default router;