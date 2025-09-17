import { useState } from "react";
import { useUploadDocument } from "../hooks/useDocuments";

export default function Upload() {
    const [file, setFile] = useState<File | null>(null);
    const upload = useUploadDocument();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;
        const formData = new FormData();
        formData.append("file", file);
        upload.mutate(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-4 space-y-4">
            <h1
                className="text-2xl font-bold">
                Upload Document
            </h1>
            <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <button
                className="bg-blue-600 text-white px-4 py-2">
                Upload
            </button>
        </form>
    );
};