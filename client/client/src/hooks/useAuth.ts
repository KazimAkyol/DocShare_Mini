import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../api/authApi";

export const useRegister = () => {
    return useMutation({
        mutationFn: registerUser,
        onSuccess: () => alert("Registration successful!"),
    });
};

export const useLogin = () => {
    return useMutation({
        mutationFn: loginUser,
        onSuccess: (res) => {
            localStorage.setItem("token", res.data.token);
            alert("Login successful!");
        },
    });
};