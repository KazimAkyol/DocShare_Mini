import { useState } from "react";
import { useLogin } from "../hooks/useAuth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = useLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login.mutate({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto p-4 space-y-4 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
                    <h1 className="text-2xl font-bold">
                        Login
                    </h1>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="border p-2 w-full"
                    />
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="border p-2 w-full"
                    />
                    <br />
                    <button
                        className="bg-blue-600 text-white px-4 py-2">
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
};