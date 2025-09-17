import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col relative bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80')",
            }}
        >

            {/* Main */}
             <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            Dokumente{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                teilen
                            </span>{" "}
                            ohne Umwege
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto">
                            Eine einfache Full-Stack-Anwendung: Dokumente hochladen, mit
                            anderen teilen und herunterladen.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg font-medium shadow-lg"
                        >
                            Kostenlos starten
                        </Link>
                        <br />
                        <Link
                            to="/login"
                            className="border border-gray-300 bg-white bg-opacity-90 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium"
                        >
                            Bestehendes Konto
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-white text-sm bg-black bg-opacity-40 relative z-10">
                <p>
                    © {new Date().getFullYear()} DokumentenTeilen. Alle Rechte
                    vorbehalten.
                </p>
            </footer>
        </div>
    );
}