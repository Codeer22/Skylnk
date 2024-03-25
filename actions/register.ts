"use server";

import bcrypt from 'bcrypt'
import { z } from "zod";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from '@/data/users';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid email or password!"};
    }

    const {email, password, name} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            error : "Email is already in use!"
        };
    }

    await db.user.create ({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    //TODO: Send verification token email
    return { success: "User Created!"};
};