import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter your email!"
    }),
    password: z.string().min(1, {
        message: "Please enter your password!"
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required!"
    }),
    password: z.string().min(6, {
        message: "Minium 6 characters required!"
    }),
    name: z.string().min(1, {
        message: "Name is required!"
    }),
});