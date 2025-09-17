import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="bg-white bg-opacity-30 backdrop-blur-md shadow-sm py-4 px-6 flex justify-between items-center fixed w-full top-0 left-0 z-20">
            {/* Sol Menü */}
            <div className="flex gap-6 text-gray-800 font-medium">
                <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                </Link>
                <Link to="/dashboard" className="hover:text-blue-600 transition-colors">
                    Dashboard
                </Link>
                <Link to="/upload" className="hover:text-blue-600 transition-colors">
                    Upload
                </Link>
            </div>

            {/* Sağ Buton */}
            <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
                Logout
            </button>
        </nav>
    );
}
