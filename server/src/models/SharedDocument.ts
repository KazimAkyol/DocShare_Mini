import mongoose, { Schema, Document } from "mongoose";

export interface ISharedDocument extends Document {
    document: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
}

const SharedDocumentSchema = new Schema<ISharedDocument>(
    {
        document: { type: Schema.Types.ObjectId, ref: "Document", required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

export default mongoose.model<ISharedDocument>("SharedDocument", SharedDocumentSchema);