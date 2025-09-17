import API from "./authApi";

export const uploadDocument = (formData: FormData) =>
    API.post("/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

export const listDocuments = () => API.get("/documents");

export const shareDocument = (data: { documentId: string; userId: string }) =>
    API.post("/documents/share", data);
