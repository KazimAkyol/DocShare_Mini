import { Request, Response } from "express";
import Document from "../models/Document";
import { AuthRequest } from "../middleware/authMiddleware";

export const uploadDocument = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No file uploaded" });

        const doc = await Document.create({
            owner: req.user.id,
            filename: req.file.originalname,
            path: req.file.path,
            mimetype: req.file.mimetype,
        });

        res.json({ message: "File uploaded", document: doc });
    } catch (err) {
        res.status(500).json({ message: "Upload failed", error: err });
    }
};

export const shareDocument = async (req: AuthRequest, res: Response) => {
    try {
        const { documentId, userId } = req.body;
        const doc = await Document.findById(documentId);
        if (!doc) return res.status(404).json({ message: "Document not found" });

        if (String(doc.owner) !== req.user.id) {
            return res.status(403).json({ message: "Not allowed" });
        }

        doc.sharedWith.push(userId);
        await doc.save();

        res.json({ message: "Document shared", document: doc });
    } catch (err) {
        res.status(500).json({ message: "Share failed", error: err });
    }
};

export const listDocuments = async (req: AuthRequest, res: Response) => {
    try {
        const docs = await Document.find({
            $or: [{ owner: req.user.id }, { sharedWith: req.user.id }],
        }).populate("owner", "username email");

        res.json({ documents: docs });
    } catch (err) {
        res.status(500).json({ message: "List failed", error: err });
    }
};