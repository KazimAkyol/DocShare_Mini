import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
            <h1 className="text-4xl font-bold">📄 Document Sharing App</h1>
            <p className="text-gray-600 max-w-md">
                Basit bir Full-Stack uygulaması: doküman yükle, başkalarıyla paylaş ve indir.
            </p>

            <div className="flex gap-4">
                <Link
                    to="/login"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};