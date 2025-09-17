import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ message: "User registered", user });
    } catch (err) {
        res.status(400).json({ message: "Registration failed", error: err });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || "secretkey",
            { expiresIn: "1d" }
        )

        res.json({ message: "Login successful", token })
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err })
    }
}