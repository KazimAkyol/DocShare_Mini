import type { IDocument } from "../types";

export default function DocumentCard({ doc }: { doc: IDocument }) {
    return (
        <div className="border p-4 rounded bg-white shadow">
            <h3 className="font-bold">{doc.filename}</h3>
            <p>
                Owner: {typeof doc.owner === "string" ? doc.owner : doc.owner?.username}
            </p>
            <a
                href={`http://localhost:5000/${doc.path}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
            >
                Download
            </a>
        </div>
    );
}
