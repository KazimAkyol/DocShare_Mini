import bcrypt from "bcrypt";

export const passwordEncrypt = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}