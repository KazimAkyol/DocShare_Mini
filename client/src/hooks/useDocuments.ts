import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listDocuments, uploadDocument, shareDocument } from "../api/documentApi";

export const useDocuments = () => {
    return useQuery({
        queryKey: ["documents"],
        queryFn: listDocuments,
    });
};

export const useUploadDocument = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: uploadDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["documents"] });
        },
    });
};

export const useShareDocument = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: shareDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["documents"] });
        },
    });
};