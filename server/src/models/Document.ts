import mongoose, { Document, Schema } from "mongoose";

export interface IDocument extends Document {
    owner: mongoose.Types.ObjectId;
    sharedWith: mongoose.Types.ObjectId[];
    filename: string;
    path: string;
    mimetype: string;
}

const DocumentSchema = new Schema<IDocument>(
    {
        owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
        sharedWith: [{ type: Schema.Types.ObjectId, ref: "User" }],
        filename: { type: String, required: true },
        path: { type: String, required: true },
        mimetype: { type: String, required: true }
    },
    { timestamps: true, collection: "documents" }
);

export default mongoose.model<IDocument>("Document", DocumentSchema);