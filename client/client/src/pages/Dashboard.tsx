import { useDocuments } from "../hooks/useDocuments";
import DocumentCard from "../components/DocumentCard";

export default function Dashboard() {
    const { data, isLoading } = useDocuments();

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.data.documents.map((doc: any) => (
                <DocumentCard key={doc._id} doc={doc} />
            ))}
        </div>
    );
};