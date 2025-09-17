import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="flex justify-between p-4 bg-blue-600 text-white">
            <Link to="/">Home</Link>
            <div className="flex gap-4">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/upload">Upload</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </nav>
    );
};
